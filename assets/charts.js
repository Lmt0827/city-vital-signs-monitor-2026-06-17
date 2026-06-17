// assets/charts.js — ECharts initialization for city vital signs monitoring report
(function() {
  var style = getComputedStyle(document.documentElement);
  var accent = style.getPropertyValue('--accent').trim();
  var accent2 = style.getPropertyValue('--accent2').trim();
  var accent3 = style.getPropertyValue('--accent3').trim();
  var accent4 = style.getPropertyValue('--accent4').trim();
  var ink = style.getPropertyValue('--ink').trim();
  var muted = style.getPropertyValue('--muted').trim();
  var rule = style.getPropertyValue('--rule').trim();
  var bg2 = style.getPropertyValue('--bg2').trim();
  var bg = style.getPropertyValue('--bg').trim();

  var palette = [accent, accent4, accent3, accent2, muted, accent + '99', accent4 + '99', accent3 + '99'];

  // --- Chart 1: Policy Count Comparison ---
  var chartCount = echarts.init(document.getElementById('chart-count'), null, { renderer: 'svg' });
  chartCount.setOption({
    animation: false,
    tooltip: { trigger: 'axis', appendToBody: true, backgroundColor: bg2, borderColor: rule, textStyle: { color: ink } },
    legend: { data: ['国内', '国外'], textStyle: { color: muted }, top: 10 },
    grid: { left: '3%', right: '4%', bottom: '3%', top: '15%', containLabel: true },
    xAxis: {
      type: 'category',
      data: ['国家级政策', '地方政策', '国家标准', '团体/行业标准', '国际组织', '各国政策', '学术/行业'],
      axisLabel: { color: muted, fontSize: 11, rotate: 20 },
      axisLine: { lineStyle: { color: rule } }
    },
    yAxis: {
      type: 'value',
      axisLabel: { color: muted },
      splitLine: { lineStyle: { color: rule } },
      axisLine: { lineStyle: { color: rule } }
    },
    series: [
      {
        name: '国内',
        type: 'bar',
        data: [4, 4, 2, 2, 0, 0, 0],
        itemStyle: { color: accent, borderRadius: [4, 4, 0, 0] },
        barWidth: '30%'
      },
      {
        name: '国外',
        type: 'bar',
        data: [0, 0, 0, 0, 3, 6, 6],
        itemStyle: { color: accent4, borderRadius: [4, 4, 0, 0] },
        barWidth: '30%'
      }
    ]
  });
  window.addEventListener('resize', function() { chartCount.resize(); });

  // --- Chart 2: Policy Domain Distribution (Pie) ---
  var chartDomain = echarts.init(document.getElementById('chart-domain'), null, { renderer: 'svg' });
  chartDomain.setOption({
    animation: false,
    tooltip: { trigger: 'item', appendToBody: true, backgroundColor: bg2, borderColor: rule, textStyle: { color: ink } },
    legend: { orient: 'vertical', right: '5%', top: 'center', textStyle: { color: muted } },
    series: [{
      type: 'pie',
      radius: ['40%', '70%'],
      center: ['40%', '50%'],
      avoidLabelOverlap: true,
      itemStyle: { borderRadius: 6, borderColor: bg, borderWidth: 2 },
      label: { color: ink, fontSize: 12 },
      labelLine: { lineStyle: { color: rule } },
      data: [
        { value: 6, name: '城市体检', itemStyle: { color: accent } },
        { value: 5, name: '城市生命线安全', itemStyle: { color: accent2 } },
        { value: 4, name: '智慧城市/数据融合', itemStyle: { color: accent4 } },
        { value: 4, name: '健康城市/公共健康', itemStyle: { color: accent3 } },
        { value: 3, name: '零碳/绿色城市', itemStyle: { color: '#4ECDC4' } },
        { value: 3, name: 'AI/数字孪生', itemStyle: { color: '#A78BFA' } },
        { value: 2, name: '城市交通', itemStyle: { color: '#F472B6' } }
      ]
    }]
  });
  window.addEventListener('resize', function() { chartDomain.resize(); });

  // --- Chart 3: Indicator System Comparison ---
  var chartIndicators = echarts.init(document.getElementById('chart-indicators'), null, { renderer: 'svg' });
  chartIndicators.setOption({
    animation: false,
    tooltip: { trigger: 'axis', appendToBody: true, backgroundColor: bg2, borderColor: rule, textStyle: { color: ink } },
    legend: { data: ['一级维度数', '二级指标数', '三级/基础指标数'], textStyle: { color: muted }, top: 5 },
    grid: { left: '3%', right: '4%', bottom: '3%', top: '15%', containLabel: true },
    xAxis: {
      type: 'category',
      data: ['中国城市体检\n指标体系', '中国城市生命体征\n可视化规范', '中国城市生命线\n监测平台规范', 'WHO欧洲\n7P框架', 'UN-Habitat\n监测框架', '欧盟绿色城市\n协定', '塞维利亚\n城市观测站'],
      axisLabel: { color: muted, fontSize: 10, interval: 0 },
      axisLine: { lineStyle: { color: rule } }
    },
    yAxis: {
      type: 'value',
      name: '指标数量',
      nameTextStyle: { color: muted },
      axisLabel: { color: muted },
      splitLine: { lineStyle: { color: rule } },
      axisLine: { lineStyle: { color: rule } }
    },
    series: [
      {
        name: '一级维度数',
        type: 'bar',
        stack: 'total',
        data: [8, 3, 6, 7, 3, 5, 4],
        itemStyle: { color: accent },
        barWidth: '40%'
      },
      {
        name: '二级指标数',
        type: 'bar',
        stack: 'total',
        data: [26, 21, 6, 0, 0, 0, 0],
        itemStyle: { color: accent4 }
      },
      {
        name: '三级/基础指标数',
        type: 'bar',
        stack: 'total',
        data: [89, 43, 0, 0, 24, 15, 120],
        itemStyle: { color: accent3 }
      }
    ]
  });
  window.addEventListener('resize', function() { chartIndicators.resize(); });

  // --- Chart 4: Hot Words Frequency ---
  var chartHotwords = echarts.init(document.getElementById('chart-hotwords'), null, { renderer: 'svg' });
  chartHotwords.setOption({
    animation: false,
    tooltip: { trigger: 'axis', appendToBody: true, backgroundColor: bg2, borderColor: rule, textStyle: { color: ink } },
    grid: { left: '3%', right: '8%', bottom: '3%', top: '5%', containLabel: true },
    xAxis: {
      type: 'value',
      axisLabel: { color: muted },
      splitLine: { lineStyle: { color: rule } },
      axisLine: { lineStyle: { color: rule } }
    },
    yAxis: {
      type: 'category',
      data: ['标准化', '数据要素', '卫星遥感', '传感器网络', '老旧小区改造', '15分钟生活圈', '绿色低碳', '综合管廊', '排水防涝', '供水管网', '数字孪生', 'CIM平台', '一网统管', '智慧城市', '动态预警', '实时监测', '城市体征', '安全监测', '城市生命线', '先体检后更新', '城市体检'],
      axisLabel: { color: muted, fontSize: 11 },
      axisLine: { lineStyle: { color: rule } }
    },
    series: [{
      type: 'bar',
      data: [5, 5, 3, 4, 6, 5, 8, 7, 7, 8, 9, 8, 10, 12, 11, 13, 14, 16, 18, 17, 22],
      itemStyle: {
        color: function(params) {
          var v = params.value;
          if (v >= 18) return accent2;
          if (v >= 12) return accent3;
          if (v >= 8) return accent4;
          return accent + '66';
        },
        borderRadius: [0, 4, 4, 0]
      },
      barWidth: '60%',
      label: { show: true, position: 'right', color: muted, fontSize: 10 }
    }]
  });
  window.addEventListener('resize', function() { chartHotwords.resize(); });

  // --- Chart 5: Radar Comparison ---
  var chartRadar = echarts.init(document.getElementById('chart-radar'), null, { renderer: 'svg' });
  chartRadar.setOption({
    animation: false,
    tooltip: { appendToBody: true, backgroundColor: bg2, borderColor: rule, textStyle: { color: ink } },
    legend: { data: ['国内政策关注度', '国外政策关注度'], textStyle: { color: muted }, top: 5 },
    radar: {
      indicator: [
        { name: '安全监测', max: 10 },
        { name: '数据融合', max: 10 },
        { name: 'AI/智能化', max: 10 },
        { name: '绿色低碳', max: 10 },
        { name: '公共服务', max: 10 },
        { name: '交通出行', max: 10 },
        { name: '健康公平', max: 10 },
        { name: '标准体系', max: 10 }
      ],
      shape: 'polygon',
      splitNumber: 5,
      axisName: { color: muted, fontSize: 11 },
      splitLine: { lineStyle: { color: rule } },
      splitArea: { show: false },
      axisLine: { lineStyle: { color: rule } }
    },
    series: [{
      type: 'radar',
      data: [
        {
          value: [9, 8, 7, 6, 7, 5, 3, 9],
          name: '国内政策关注度',
          lineStyle: { color: accent, width: 2 },
          areaStyle: { color: accent + '33' },
          itemStyle: { color: accent },
          symbol: 'circle',
          symbolSize: 6
        },
        {
          value: [6, 7, 8, 8, 8, 7, 9, 5],
          name: '国外政策关注度',
          lineStyle: { color: accent4, width: 2 },
          areaStyle: { color: accent4 + '33' },
          itemStyle: { color: accent4 },
          symbol: 'circle',
          symbolSize: 6
        }
      ]
    }]
  });
  window.addEventListener('resize', function() { chartRadar.resize(); });
})();
