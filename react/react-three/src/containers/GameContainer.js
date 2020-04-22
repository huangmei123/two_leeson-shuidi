import React, { Component } from 'react'
import * as THREE from 'three' // 组件
// THREE.js 组件
import React3 from 'react-three-renderer'
// three.js 更简单
export default class GameContainer extends Component {
  constructor(props, context) {
    super(props, context)
    this.cameraPositon = new THREE.Vector3(0, 0, 5) //三维空间
    this.state = {
    }
  }
  render() {
    const width = window.innerWidth,
      height = window.innerHeight
    console.log(width, height)
    return (
      //3D渲染组件
      <React3
      /*主摄像头 仿照拍摄过程来写的 相机*/
        mainCamera="camera" 
        width={width}
        height={height}>
          {/* 场景 
          perspectiveCamera就是相机，可以有多个，对应的name属性 
          fov 角度 75度
          aspect 拍摄的比例
          near 近景 far远景
          position 相机放置在this.cameraPositon
          */}
        <scene>
          <perspectiveCamera 
            name="camera"
            fov={75}
            aspect={width/height}
            nea