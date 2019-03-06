import React from 'react';
export const Nav00DataSource = {
  wrapper: { className: 'header0 home-page-wrapper' },
  page: { className: 'home-page' },
  logo: {
    className: 'header0-logo',
    children: 'http://192.168.101.160:8000/src/routes/About Us/images/logo.png',
  },
  Menu: {
    className: 'header0-menu',
    children: [
      {
        name: 'item0',
        a: {
          children: (
            <span>
              <p>融智捷</p>
            </span>
          ),
          href: '',
          className: 'jsecoah238g-editor_css',
        },
      },
      {
        name: 'item1',
        a: {
          children: (
            <span>
              <p>产品展示</p>
            </span>
          ),
          href: '',
        },
      },
      {
        name: 'item2',
        a: {
          children: (
            <span>
              <p>关于我们</p>
            </span>
          ),
          href: '',
        },
      },
    ],
  },
  mobileMenu: { className: 'header0-mobile-menu' },
};
export const Content130DataSource = {
  OverPack: {
    className: 'home-page-wrapper content13-wrapper jsecykm7gw-editor_css',
    playScale: 0.3,
  },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'content2',
        children: (
          <span>
            <p>产品展示/详细信息</p>
          </span>
        ),
        className: 'title-content jsecz1qjt1-editor_css',
      },
    ],
  },
};
export const Content60DataSource = {
  wrapper: { className: 'home-page-wrapper content6-wrapper' },
  OverPack: { className: 'home-page content6 jsed13u3y6u-editor_css' },
  textWrapper: { className: 'content6-text', xs: 24, md: 10 },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'title',
        children: (
          <span>
            <p>产品名称</p>
          </span>
        ),
        className: 'title-h1',
      },
      {
        name: 'content~jsedbn4i13',
        className: 'title-content jsedbo50klc-editor_css',
        children: (
          <span>
            <p>
              RZJ嵌入式能量在线监测系统基于嵌入式平台服务器本产品可组建一个不超过128
              台单回路仪表的监控系统。
            </p>
            <p>产品提供8路的RS485 接口，用于接入仪表的485线。</p>
            <p>
              通过以太网口，可将设备直接接入以太网。用户端无需安装其他软件，使用Google
              Chrome 浏览器（也支持IE8
              或更高版本浏览器），键入对应的地址即可进入到系统的登录界面，登录后即可实现对设备的配置、线路状态查询、下载记录等操作。
            </p>
          </span>
        ),
      },
      {
        name: 'content~jsedcj479q9',
        className: 'title-content jsedbo50klc-editor_css',
        children: (
          <span>
            <p>主要功能：</p>
            <p>数据的实时监控</p>
            <p>1. 按位置查询</p>
            <p>用户可见对应位置的仪表型号、通讯状态，及回路状态数据</p>
            <p>2. 按参数查询</p>
            <p>
              主题参数：回路概况、负载电流、线路电压、有功功率、无功功率、视在功率、功率因数、电度、需量、谐波。
            </p>
            <p> 查看历史数据</p>
            <p> 辅助功能</p>
            <p>通信端口检测、读寄存器、数据清除、告警信息、事件记录</p>
          </span>
        ),
      },
    ],
  },
  img: {
    children: 'http://192.168.101.160:8000/src/routes/productDetails/images/cp_2_1.png',
    className: 'content6-img',
    xs: 24,
    md: 14,
  },
  block: { children: [] },
};
export const Footer00DataSource = {
  wrapper: { className: 'home-page-wrapper footer0-wrapper' },
  OverPack: { className: 'home-page footer0', playScale: 0.05 },
  copyright: {
    className: 'copyright',
    children: (
      <span>
        ©2018 <a href="https://motion.ant.design">Ant Motion</a> All Rights
        Reserved
      </span>
    ),
  },
};
