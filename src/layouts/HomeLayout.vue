<template>
  <div id="home-layout">
    <div id="nav">
      <router-link to="/">{{ $t('label.homepage') }}</router-link> |
      <router-link to="/about">{{ $t('label.about') }}</router-link>
    </div>
    <div id="content">
      <router-view/>
    </div>
  </div>
</template>
