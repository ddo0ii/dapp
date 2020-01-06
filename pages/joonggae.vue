<template>
    <v-layout column="column" row="row">
        <v-flex wrap="wrap">
            <v-list-item>
                <v-list-item-content>
                    <p class="font-weight-black">대상물 구분</p>
                    <v-btn-toggle
                        v-model="mjws"
                        tile="tile"
                        color="blue"
                        group="group"
                        style="flex-wrap: wrap; width: 100%">
                        <v-btn class="caption" value="m" height="40px" style="width: 30%">매매계약</v-btn>
                        <v-btn class="caption" value="j" height="40px" style="width: 30%">전세계약</v-btn>
                        <v-btn class="caption" value="w" height="40px" style="width: 30%">월세계약</v-btn>
                    </v-btn-toggle>
                </v-list-item-content>
            </v-list-item>

            <v-list-item>
                <v-list-item-content>
                    <p class="font-weight-black">거래 구분</p>
                    <v-btn-toggle
                        v-model="asset_type"
                        tile="tile"
                        color="blue"
                        group="group"
                        style="flex-wrap: wrap; width: 100%">
                        <v-btn class="caption" value="house" height="40px" style="width: 45%">주택</v-btn>
                        <v-btn class="caption" value="op" height="40px" style="width: 45%">오피스텔</v-btn>
                        <v-btn class="caption" value="etc" height="40px" style="width: 90%">주택이외(토지, 상가 등)</v-btn>
                    </v-btn-toggle>
                </v-list-item-content>
            </v-list-item>

            <v-list-item>
                <v-list-item-content>
                    <div v-if="mjws==='m'">
                        <v-row>
                            <v-col cols="4">
                                <v-subheader class="caption" color="blue darken-4">매매가</v-subheader>
                            </v-col>
                            <v-col cols="7">
                                <v-text-field
                                    v-model="price_m"
                                    class="caption"
                                    placeholder="매매가 입력"
                                    suffix="만원"></v-text-field>
                            </v-col>
                        </v-row>
                    </div>
                    <div v-if="(mjws==='j')||(mjws==='w')">
                        <v-row>
                            <v-col cols="4">
                                <v-subheader class="caption" color="blue darken-4">보증금</v-subheader>
                            </v-col>
                            <v-col cols="7">
                                <v-text-field
                                    v-model="price_wbo"
                                    class="caption"
                                    placeholder="보증금 입력"
                                    suffix="만원"></v-text-field>
                            </v-col>
                        </v-row>
                    </div>
                    <div v-if="mjws==='w'">
                        <v-row>
                            <v-col cols="4">
                                <v-subheader class="caption" color="blue darken-4">월세</v-subheader>
                            </v-col>
                            <v-col cols="7">
                                <v-text-field v-model="price_w" class="caption" placeholder="월세 입력" suffix="만원"></v-text-field>
                            </v-col>
                        </v-row>
                    </div>
                    <div class="being">
                        <v-btn max-width="80%" min-width="80%" color="#2D9527" dark="dark">계산하기</v-btn>
                    </div>

                </v-list-item-content>
            </v-list-item>

        </v-flex>
    </v-layout>
</template>
<script>
    export default {
        name: 'jeungyeo',
        data() {
            return {
                mjws: 'm',
                asset_type: 'house',
                price_m: '',
                price_wbo: '',
                price_w: '',
                price_current: '',
                price_premium: '',
                letspost: ''
            }
        }
    }
</script>

<style scoped="scoped">
    .being {
        display: flex;
        justify-content: center;
    }
</style>