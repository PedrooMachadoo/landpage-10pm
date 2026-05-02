'use client';

import { cn } from '@/lib/utils';
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface DottedSurfaceProps extends Omit<React.ComponentProps<'div'>, 'ref'> {
  speed?: number;
  particleSize?: number;
  waveAmplitude?: number;
  color?: string; // hex e.g. "#4361ee"
  opacity?: number;
}

export function DottedSurface({
  className,
  speed = 0.022,
  particleSize = 3.5,
  waveAmplitude = 38,
  color = '#4361ee',
  opacity = 0.55,
  ...props
}: DottedSurfaceProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const SEPARATION = 110;
    const AMOUNTX = 36;
    const AMOUNTY = 28;

    const w = container.offsetWidth;
    const h = container.offsetHeight;

    // Parse hex color to RGB 0–1
    const hex = color.replace('#', '');
    const r = parseInt(hex.substring(0, 2), 16) / 255;
    const g = parseInt(hex.substring(2, 4), 16) / 255;
    const b = parseInt(hex.substring(4, 6), 16) / 255;

    // Scene
    const scene = new THREE.Scene();

    // Camera — slightly elevated, looking down at the grid
    const camera = new THREE.PerspectiveCamera(55, w / h, 1, 8000);
    camera.position.set(0, 420, 980);
    camera.lookAt(0, 0, 0);

    // Renderer — sized to container, not window
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(w, h);
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    // Geometry
    const geometry = new THREE.BufferGeometry();
    const positions: number[] = [];
    const colors: number[] = [];

    for (let ix = 0; ix < AMOUNTX; ix++) {
      for (let iy = 0; iy < AMOUNTY; iy++) {
        const x = ix * SEPARATION - (AMOUNTX * SEPARATION) / 2;
        const z = iy * SEPARATION - (AMOUNTY * SEPARATION) / 2;
        positions.push(x, 0, z);
        colors.push(r, g, b);
      }
    }

    geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: particleSize,
      vertexColors: true,
      transparent: true,
      opacity,
      sizeAttenuation: true,
      depthWrite: false,
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);

    let count = 0;
    let animationId: number;

    const animate = () => {
      animationId = requestAnimationFrame(animate);

      const pos = geometry.attributes.position.array as Float32Array;
      let i = 0;
      for (let ix = 0; ix < AMOUNTX; ix++) {
        for (let iy = 0; iy < AMOUNTY; iy++) {
          // Y = two overlapping sine waves — creates smooth, organic ripple
          pos[i * 3 + 1] =
            Math.sin((ix + count) * 0.28) * waveAmplitude +
            Math.sin((iy + count) * 0.42) * (waveAmplitude * 0.6);
          i++;
        }
      }
      geometry.attributes.position.needsUpdate = true;

      // Very slow drift rotation for depth
      points.rotation.y = Math.sin(count * 0.04) * 0.06;

      renderer.render(scene, camera);
      count += speed;
    };

    animate();

    // ResizeObserver — reacts to container size, not window
    const ro = new ResizeObserver(() => {
      const nw = container.offsetWidth;
      const nh = container.offsetHeight;
      camera.aspect = nw / nh;
      camera.updateProjectionMatrix();
      renderer.setSize(nw, nh);
    });
    ro.observe(container);

    return () => {
      ro.disconnect();
      cancelAnimationFrame(animationId);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [speed, particleSize, waveAmplitude, color, opacity]);

  return (
    <div
      ref={containerRef}
      className={cn('pointer-events-none absolute inset-0 overflow-hidden', className)}
      {...props}
    />
  );
}
