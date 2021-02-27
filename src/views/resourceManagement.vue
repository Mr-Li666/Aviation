<template>
  <div class="resourceManagement">
    <baidu-map class="bdmap" ak="oR7Om2lk5PGMBEv7BTdna0Vb2H1BIwOB" 
      :center="center" 
      :zoom="zoom" 
      @ready="handler" 
      :scroll-wheel-zoom="true">  
      <!-- 滑轮控制地图缩放 -->
      <bm-scale anchor="BMAP_ANCHOR_TOP_RIGHT" ></bm-scale>
      <bm-navigation anchor="BMAP_ANCHOR_BOTTOM_RIGHT" ></bm-navigation>
      <bm-map-type :map-types="['BMAP_NORMAL_MAP', 'BMAP_HYBRID_MAP']" anchor="BMAP_ANCHOR_TOP_LEFT"></bm-map-type>
       <!-- <bm-overview-map anchor="BMAP_ANCHOR_BOTTOM_RIGHT" :isOpen="true"></bm-overview-map> -->
    </baidu-map>
  </div>
</template>

<script>
import BaiduMap from "vue-baidu-map/components/map/Map.vue";   //引入整个百度地图
import BmScale from 'vue-baidu-map/components/controls/Scale'; //引入地图控件：比例尺
import BmNavigation from 'vue-baidu-map/components/controls/Navigation'; // 引入地图控件：缩放
import BmMapType from 'vue-baidu-map/components/controls/MapType'; //引入地图控件：不同模式切换
// import BmOverviewMap from 'vue-baidu-map/components/controls/OverviewMap';

export default {
  name: "resManagement",
  components: {
    BaiduMap,
    BmScale,
    BmNavigation,
    BmMapType,
  },
  data() {
    return {
      center: {
        lng: 0,
        lat: 0,
      },
      zoom: 3,
    };
  },
  methods: {
    handler({ Bmap, map }) {
      console.log(BMap, map);
      this.center.lng = 116.404;
      this.center.lat = 39.915;
      this.zoom = 15;
    },
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
</style>