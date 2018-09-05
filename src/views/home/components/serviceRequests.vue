<template>
    <div style="position: relative;width:100%;height:100%;">
        <div style="width:100%;height:100%;" id="service_request_con"></div>
        <span style="position: absolute;top:160px; width:100%; text-align: center;font-size: 16px; " v-show="isVoid">没有数据</span>
    </div>
</template>

<script>
    import echarts from 'echarts';

    export default {
        name: 'serviceRequests',
        data () {
            return {
                echartsOption: {
                    xAxisData: [],
                    seriesData: []
                },
                isVoid: false,
            };
        },
        props: ['option'],
        watch: {
            option: function (val) {
                console.log('watch', val.seriesData.length);
                if (!val.seriesData.length) {

                    this.isVoid=true;
                }else{
                    this.isVoid=false;
                }
                this.echartsOption = Object.assign({}, val);
                this.echartsInit(this.echartsOption);
            }
        },
        created () {
        },
        mounted () {
            console.log('mounted', this.option);
            if (!this.echartsOption.seriesData.length) {

                this.isVoid=true;
            }else{
                this.isVoid=false;
            }
            this.echartsInit(this.echartsOption);
        },
        methods: {
            echartsInit (info) {
                const option = {
                    title: {
                        text: '磁盘使用量',
                        left: 'center',
                        textStyle: {
                            align: 'center'
                        },
                    },
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'cross',
                            label: {
                                backgroundColor: '#6a7985'
                            }
                        }
                    },
                    grid: {
                        top: '13%',
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis: [
                        {
                            type: 'category',
                            boundaryGap: false,
                            min:'dataMin',
                            max:'dataMax',
                            axisLabel : {
                                show : true,
                                formatter:function(value) {
                                    console.log(value);
                                    return value.split(' ').join("\n");
                                },
                            },
                            data: info.xAxisData
                        }
                    ],
                    yAxis: [
                        {
                            type: 'value'
                        }
                    ],
                    series: [
                        {
                            name: '磁盘使用量',
                            type: 'line',
                            stack: '磁盘使用量',
                            // areaStyle: {
                            //   normal: {
                            //     color: "#2d8cf0"
                            //   }
                            // },
                            data: info.seriesData
                        }
                    ]
                };
                console.log('重绘');
                const serviceRequestCharts = echarts.init(
                    document.getElementById('service_request_con')
                );
                serviceRequestCharts.setOption(option);

                window.addEventListener('resize', function () {
                    serviceRequestCharts.resize();
                });
            }
        }
    };
</script>