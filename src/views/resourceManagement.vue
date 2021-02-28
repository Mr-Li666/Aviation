<template>
  <div class="resourceManagement">
    <baidu-map
      class="bdmap"
      ak="oR7Om2lk5PGMBEv7BTdna0Vb2H1BIwOB"
      :center="center"
      :zoom="zoom"
      @ready="handler"
      :scroll-wheel-zoom="true"
    >
      <!-- 滑轮控制地图缩放 -->

      <!-- 比例尺控件 -->
      <bm-scale anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-scale>
      <!-- 缩放控件 -->
      <bm-navigation anchor="BMAP_ANCHOR_BOTTOM_RIGHT"></bm-navigation>
      <!-- 切换地图类型控件 -->
      <!-- <bm-map-type
        :map-types="['BMAP_NORMAL_MAP', 'BMAP_HYBRID_MAP']"
        anchor="BMAP_ANCHOR_TOP_LEFT"
      ></bm-map-type> -->
      <!-- 城市列表控件 -->
      <bm-city-list anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-city-list>

      
      <bm-control class="bmcontrol">
        <!-- 距离测量 -->
        <button class="distance" @click="openDistanceTool">距离测量</button>
        <button class="showname" @click="showname">面积测量</button>
        <button class="showname" @click="showname">显示名称</button>
        <button class="showname" @click="showname">刷新</button>
      </bm-control>
    </baidu-map>
  </div>
</template>

<script>
import BaiduMap from "vue-baidu-map/components/map/Map.vue"; //引入整个百度地图
import BmScale from "vue-baidu-map/components/controls/Scale"; //引入地图控件：比例尺
import BmNavigation from "vue-baidu-map/components/controls/Navigation"; // 引入地图控件：缩放
import BmMapType from "vue-baidu-map/components/controls/MapType"; //引入地图控件：不同模式切换
import BmCityList from "vue-baidu-map/components/controls/CityList";

import BmControl from "vue-baidu-map/components/controls/Control"
import DistanceTool from 'bmaplib.distancetool'

export default {
  name: "resManagement",
  components: {
    BaiduMap,
    BmScale,
    BmNavigation,
    BmMapType,
    BmCityList,

    BmControl,
    DistanceTool,
  },
  unmount () {
    distanceTool && distanceTool.close()
  },
  data() {
    return {
      center: {
        lng: 0,
        lat: 0,
      },
      zoom: 1,
    };
  },
  methods: {
    handler({ Bmap, map }) {
      console.log(BMap, map);
      this.center.lng = 116.404;
      this.center.lat = 39.915;
      this.zoom = 15;
    },
    setDistanceToolInstance ({map}) {
      this.distanceTool = new DistanceTool(map, {lineStroke : 2})
    },
    openDistanceTool (e) {
      const {distanceTool} = this
      distanceTool && distanceTool.open()
    },
    showname(){
      console.log('显示名称')
    }
  },
};
</script>

<style>
.resourceManagement {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.bdmap {
  width: 100%;
  height: 100%;
}
.bmcontrol{
  inset: 30px 200px auto auto  !important;
}
.bmcontrol button{
  width: 110px;
  height: 50px;
  color: #c8dff1;
  background: rgba(0, 0, 0, .3);
  border: 1px solid gray;
  cursor: pointer;
  font-size: 16px;
  outline: none;
}
</style>