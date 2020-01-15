<template>
    <v-layout column="column" row="row">
        <v-tabs background-color="white" color="#2D9527" center-active="center-active">
            <v-tab to="/yangdo">양도소득세</v-tab>
            <v-tab class="font-weight-black" to="/chwideug">취득세</v-tab>
            <v-tab to="/tuja">투자수익률</v-tab>
            <v-tab to="/jeungyeo">증여세</v-tab>
            <v-tab to="/joonggae">중개보수료</v-tab>
            <v-tab to="/doro">도로명주소</v-tab>
            <v-tab to="/pyeongsu">평수환산</v-tab>
            <v-tab to="/iza">이자계산</v-tab>
        </v-tabs>
        <v-divider></v-divider>
        <v-flex wrap="wrap">
            <v-dialog v-model="dialog2" width="600px">
                <template v-slot:activator="{ on }">
                    <v-btn
                        absolute="absolute"
                        color="orange"
                        dark="dark"
                        fab="fab"
                        right="right"
                        small="small"
                        v-on="on">
                        <v-icon small="small">mdi-help</v-icon>
                    </v-btn>
                </template>
                <v-card>
                    <v-card-title>
                        <span class="headline">취득가액 산정방법</span>
                    </v-card-title>
                    <v-card-text>・ 매매, 분양, 경매 등 개인간의 유상거래일 때는 신고가액 (실제 거래가격을 의미하며, 신고를 하지 않거나 신고 금액이
                        시가표준액에 미달 또는 신고 가액 표시가 없는 경우 시가표준액으로 계산함)
                        <br/>
                        <br/>・ 상속, 증여 등 무상거래일 때는 시가표준액
                        <br/>
                        <br/>・ 국가, 법인 등에 의해 취득가격이 증명되는 거래일 때는 취득가격
                        <br/>
                        <br/>※ 시가 표준액이란, 주택은 '개별 주택 공시가격', 주택 이외 건물은 '지자체장이 결정한 가액', 토지는 '개별공시지가'를 의미합니다
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                            class="caption"
                            color="blue darken-1"
                            text="text"
                            @click="dialog2 = false">OK</v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
            <v-list-item>
                <v-list-item-content>
                    <p class="font-weight-black">대상물 구분</p>
                    <v-btn-toggle
                        v-model="asset_type"
                        tile="tile"
                        color="blue"
                        group="group"
                        style="flex-wrap: wrap; width: 100%">
                        <v-btn class="caption" value="house" height="40px" style="width: 45%">주택</v-btn>
                        <v-btn class="caption" value="farm" height="40px" style="width: 45%">농지</v-btn>
                        <v-btn class="caption" value="land" height="40px" style="width: 90%">토지,건물,오피스텔</v-btn>
                    </v-btn-toggle>
                </v-list-item-content>
            </v-list-item>

            <v-list-item>
                <v-list-item-content>
                    <p class="font-weight-black">취득 구분</p>
                    <v-btn-toggle
                        v-model="kind"
                        tile="tile"
                        color="blue"
                        group="group"
                        style="flex-wrap: wrap; width: 100%">
                        <v-btn class="caption" value="meme" height="40px" style="width: 22.5%">매매</v-btn>
                        <v-btn class="caption" value="gift" height="40px" style="width: 22.5%">증여</v-btn>
                        <v-btn class="caption" value="inherit" height="40px" style="width: 22.5%">상속</v-btn>
                        <v-btn
                            v-if="(asset_type==='house')||(asset_type==='land')"
                            class="caption"
                            kind="build"
                            value="b4"
                            height="40px"
                            style="width: 22.5%">신축</v-btn>
                    </v-btn-toggle>
                </v-list-item-content>
            </v-list-item>

            <div v-if="(asset_type==='house')&&(kind==='meme')">
                <v-list-item>
                    <v-list-item-content>
                        <p class="font-weight-black">면적</p>

                        <v-btn-toggle
                            v-model="area"
                            tile="tile"
                            color="blue"
                            group="group"
                            style="flex-wrap: wrap; width: 100%">
                            <v-btn class="caption" value="small" height="40px" style="width: 90%">85m^2 이하(읍, 면지역은 100m^2)</v-btn>
                            <v-btn class="caption" value="large" height="40px" style="width: 90%">85m^2 초과(읍, 면지역은 100m^2)</v-btn>
                        </v-btn-toggle>
                    </v-list-item-content>
                </v-list-item>
            </div>
            <div v-if="(asset_type==='farm')&&(kind==='meme')">
                <v-list-item>
                    <v-list-item-content>
                        <v-btn-toggle
                            v-model="farm_type"
                            tile="tile"
                            color="blue"
                            group="group"
                            style="flex-wrap: wrap; width: 100%">
                            <v-btn
                                class="caption"
                                farm_type="new"
                                value="new"
                                height="40px"
                                style="width: 45%">신규</v-btn>
                            <v-btn
                                class="caption"
                                farm_type="farming"
                                value="farming"
                                height="40px"
                                style="width: 45%">2년 이상 자경</v-btn>
                        </v-btn-toggle>
                    </v-list-item-content>
                </v-list-item>
            </div>
            <v-list-item>
                <v-list-item-content>
                    <p class="font-weight-black">취득가액</p>
                    <v-col cols="4">
                        <v-subheader class="caption" color="blue darken-4">취득가액</v-subheader>
                    </v-col>
                    <v-col cols="7">
                        <v-text-field class="caption" v-model="price" placeholder="취득가액 입력" suffix="만원"></v-text-field>
                    </v-col>

                    <v-dialog
                        v-model="dialog"
                        fullscreen="fullscreen"
                        hide-overlay="hide-overlay"
                        transition="dialog-bottom-transition">
                        <template v-slot:activator="{ on }">
                            <div class="being">
                                <v-btn
                                    @click="chwiTest"
                                    max-width="80%"
                                    min-width="80%"
                                    color="#2D9527"
                                    dark="dark"
                                    v-on="on">계산하기</v-btn>
                            </div>
                        </template>
                        <v-card>
                            <v-toolbar dark="dark" color="#2D9527">
                                <v-btn icon="icon" dark="dark" @click="dialog = false">
                                    <v-icon>mdi-close</v-icon>
                                </v-btn>
                                <v-toolbar-title>계산 결과</v-toolbar-title>
                            </v-toolbar>
                            <v-container v-if="ccalc_result.cwhich === 'fee-registration'">
                                <v-list>
                                    <v-list-item>
                                        <v-list-item-content>취득세</v-list-item-content>
                                        <v-list-item-content>{{ccalc_result.cresult.chui_deuk_tax}}원</v-list-item-content>
                                    </v-list-item>
                                    <v-list-item>
                                        <v-list-item-content>농어촌특별세</v-list-item-content>
                                        <v-list-item-content>{{ccalc_result.cresult.nong_eo_chon_special_tax}}원</v-list-item-content>
                                    </v-list-item>
                                    <v-list-item>
                                        <v-list-item-content>지방교육세</v-list-item-content>
                                        <v-list-item-content>{{ccalc_result.cresult.jibang_education_tax}}원</v-list-item-content>
                                    </v-list-item>
                                    <v-list-item>
                                        <v-list-item-content style="color: #0085FF">세액합계액</v-list-item-content>
                                        <v-list-item-content style="color: #0085FF">{{ccalc_result.cresult.total_tax}}원</v-list-item-content>
                                    </v-list-item>
                                </v-list>
                            </v-container>
                            <v-divider></v-divider>
                            <v-container v-if="ccalc_result.cwhich === 'fee-registration'">
                                <v-list>
                                    <v-list-item>
                                        <v-list-item-content>인지대</v-list-item-content>
                                        <v-list-item-content>{{ccalc_result.cresult.inji_tax}}원</v-list-item-content>
                                    </v-list-item>
                                    <v-list-item>
                                        <v-list-item-content>증지대</v-list-item-content>
                                        <v-list-item-content>{{ccalc_result.cresult.jeungji_tax}}원</v-list-item-content>
                                    </v-list-item>
                                    <v-list-item>
                                        <v-list-item-content>채권할인(변동큼)<br/>할인률 4% 기준</v-list-item-content>
                                        <v-list-item-content>{{ccalc_result.cresult.bond_discount}}원</v-list-item-content>
                                    </v-list-item>
                                </v-list>
                            </v-container>
                            <v-divider></v-divider>
                            <v-container v-if="ccalc_result.cwhich === 'fee-registration'">
                                <v-list>
                                    <v-list-item>
                                        <v-list-item-content>법무 기본보수</v-list-item-content>
                                        <v-list-item-content>{{ccalc_result.cresult.lawyer_fee}}원</v-list-item-content>
                                    </v-list-item>
                                    <v-list-item>
                                        <v-list-item-content>부가세</v-list-item-content>
                                        <v-list-item-content>{{ccalc_result.cresult.lawyer_fee_tax}}원</v-list-item-content>
                                    </v-list-item>
                                    <v-list-item>
                                        <v-list-item-content>대행비</v-list-item-content>
                                        <v-list-item-content>{{ccalc_result.cresult.dehang}}원</v-list-item-content>
                                    </v-list-item>
                                    <v-list-item>
                                        <v-list-item-content>등록세</v-list-item-content>
                                        <v-list-item-content>{{ccalc_result.cresult.deungrocse}}원</v-list-item-content>
                                    </v-list-item>
                                    <v-list-item>
                                        <v-list-item-content>일당</v-list-item-content>
                                        <v-list-item-content>{{ccalc_result.cresult.ildang}}원</v-list-item-content>
                                    </v-list-item>
                                </v-list>
                            </v-container>
                            <v-divider></v-divider>
                            <v-container v-if="ccalc_result.cwhich === 'fee-registration'">
                                <v-list>
                                    <v-list-item>
                                        <v-list-item-content style="color: #0085FF">총 비용</v-list-item-content>
                                        <v-list-item-content style="color: #0085FF">{{ccalc_result.cresult.total_price}}원</v-list-item-content>
                                    </v-list-item>
                                </v-list>
                            </v-container>
                        </v-card>
                    </v-dialog>
                </v-list-item-content>
            </v-list-item>
        </v-flex>
    </v-layout>
</template>
<script src="https://unpkg.com/vue/dist/vue.js"></script>
<script src="https://unpkg.com/vue-cookies@1.6.1/vue-cookies.js"></script>
<script>
    import axios from "axios"
    import Vue from 'vue'
    import VueCookies from 'vue-cookies'
    Vue.use(VueCookies)
    export default {
        name: 'chwideug',
        data() {
            return {
                asset_type: 'house',
                kind: 'meme',
                area: '',
                farm_type: '',
                dialog: false,
                dialog2: false,
                price: null,
                ccalc_result: {
                    cwhich: '',
                    cresult: null
                },
                inserted_price: '',

                chui_deuk_tax: '',
                nong_eo_chon_special_tax: '',
                jibang_education_tax: '',
                total_tax: '',
                inji_tax: '',
                jeungji_tax: '',
                bond_discount: '',
                lawyer_fee: '',
                lawyer_fee_tax: '',
                dehang: '',
                deungrocse: '',
                ildang: '',
                total_price: '',
                ccount: 0
            }
        },
        methods: {
            chwiTest() {
                axios
                    .post(
                        "https://www.ddhouse.co.kr/api/v1/public/calculator/fee-registration",
                        {
                            naming: "취득세",
                            asset_type: this.asset_type,
                            kind: this.kind,
                            area: this.area,
                            farm_type: this.farm_type,
                            price: this.price
                        }
                    )
                    .then(res => {
                        var usering = {
                            naming: "취득세",
                            asset_type: this.asset_type,
                            kind: this.kind,
                            area: this.area,
                            farm_type: this.farm_type,
                            price: this.price
                        }
                        this
                            .$cookies
                            .set('usering' + this.ccount, usering);
                        // print user name
                        console.log(this.$cookies.get('usering' + this.ccount))

                        console.log(res);
                        this.ccalc_result.cwhich = 'fee-registration'
                        this.ccalc_result.cresult = res
                            .data
                            console
                            .log(this.ccalc_result)
                        this
                            .$cookies
                            .set('rusering' + this.ccount, res.data)
                        console.log(this.$cookies.get('rusering' + this.ccount))
                        this.ccount++;

                        if (this.ccount > 9) {
                            this.ccount = 0;
                        }
                    })
                    .catch(err => {
                        console.log(err);
                    });
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