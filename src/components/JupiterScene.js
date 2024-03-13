import React, { useEffect } from 'react';
import * as THREE from 'three';

const JupiterScene = () => {
    useEffect(() => {
        // Set up the scene, camera, renderer
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement);
        // Add Sphere - Jupiter w/ texture file
        const geometry = new THREE.SphereGeometry(1, 32, 32);
        const material = new THREE.MeshBasicMaterial({ map: THREE.ImageUtils.loadTexture('/textures/jupiter.jpg') });
        const sphere = new THREE.Mesh(geometry, material);
        scene.add(sphere);

        camera.position.z = 5;

        // Add light
        const light = new THREE.DirectionalLight(0xffffff);
        light.position.set(1, 1, 1);
        scene.add(light);

        // Render the scene
        const animate = () => {
            requestAnimationFrame(animate);
            renderer.render(scene, camera);
        };
        animate();

        return () => {
            document.body.removeChild(renderer.domElement);
        };
    }, []);

    return <div />
};