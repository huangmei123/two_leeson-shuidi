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
      // 表示一个运动  几何体 用Euler完成x, y z 的旋转
      cubeRotation: new THREE.Euler() // mvvm 
    }
    this._onAnimate = () => {
      this.setState({
        cubeRotation: new THREE.Euler(
          this.state.cubeRotation.x + 0.1,
          this.state.cubeRotation.y + 0.1,
          0
        )
      })
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
        height={height}
        onAnimate={this._onAnimate}>
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
            near={0.1}
            far={1000}
            position={this.cameraPositon}
          />
          <mesh
          rotation={this.state.cubeRotation}
          >
            {/* 形状 
            boxGeometry盒子
            meshBasicMaterial 就是在盒子外面的材料
            */}
            <boxGeometry
            width={1}
            height={1}
            depth={1}>
            </boxGeometry>
            <meshBasicMaterial color={0x00ff00}/>
          </mesh>
        </scene>
      </React3>
    )
  }
}
