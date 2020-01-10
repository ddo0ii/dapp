<template>
    <v-layout column="column" row="row">
        <v-tabs background-color="white" color="#2D9527" center-active="center-active">
            <v-tab to="/yangdo">양도소득세</v-tab>
            <v-tab to="/chwideug">취득세</v-tab>
            <v-tab class="font-weight-black" to="/tuja">투자수익률</v-tab>
            <v-tab to="/jeungyeo">증여세</v-tab>
            <v-tab to="/joonggae">중개보수료</v-tab>
            <v-tab to="/doro">도로명주소</v-tab>
            <v-tab to="/pyeongsu">평수환산</v-tab>
            <v-tab to="/iza">이자계산</v-tab>
        </v-tabs>
        <v-divider></v-divider>
        <v-flex wrap="wrap">
            <v-col cols="11">
                <v-row justify="end">
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
                                <span class="headline">투자 수익률이란?</span>
                            </v-card-title>
                            <v-card-text>
                                부동산 투자 시, 투입 자본에 대해 매년 순이익이 얼마정도인지를 나타내는 비율입니다.
                                <br>즉, {(수익 - 비용) / 투입자본금액} x 100
                                </v-card-text>
                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn
                                        class="caption"
                                        color="green darken-1"
                                        text="text"
                                        @click="dialog2 = false">OK</v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-dialog>
                    </v-row>
                </v-col>
                <v-row>
                    <v-col cols="4">
                        <v-subheader class="caption" color="green darken-4">매수가격</v-subheader>
                    </v-col>
                    <v-col cols="7">
                        <v-text-field
                            class="caption"
                            v-model="price_m"
                            placeholder="부동산을 매수할 금액"
                            suffix="만원"></v-text-field>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="4">
                        <v-subheader class="caption" color="green darken-4">투입자본</v-subheader>
                    </v-col>
                    <v-col cols="7">
                        <v-text-field
                            class="caption"
                            v-model="price_invest"
                            placeholder="투입할 자본금액"
                            suffix="만원"></v-text-field>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="4">
                        <v-subheader class="caption" color="green darken-4">보증금</v-subheader>
                    </v-col>
                    <v-col cols="7">
                        <v-text-field
                            class="caption"
                            v-model="price_wbo"
                            placeholder="임대 보증금"
                            suffix="만원"></v-text-field>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="4">
                        <v-subheader class="caption" color="green darken-4">월세</v-subheader>
                    </v-col>
                    <v-col cols="7">
                        <v-text-field class="caption" v-model="price_w" placeholder="월 임대료" suffix="만원"></v-text-field>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="4">
                        <v-subheader class="caption" color="green darken-4">대출 금리</v-subheader>
                    </v-col>
                    <v-col cols="7">
                        <v-text-field class="caption" v-model="rate" placeholder="이자율" suffix="(연 %)"></v-text-field>
                    </v-col>
                </v-row>
                <v-dialog
                    v-model="dialog"
                    fullscreen="fullscreen"
                    hide-overlay="hide-overlay"
                    transition="dialog-bottom-transition">
                    <template v-slot:activator="{ on }">
                        <div class="being">
                            <v-btn
                                @click="tuTest"
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
                        <v-container v-if="tcalc_result.twhich === 'income'">
                            <v-list>
                                <v-list-item>
                                    <v-list-item-content>매수가격</v-list-item-content>
                                    <v-list-item-content>{{tcalc_result.tresult.str_purchasePrice}}원</v-list-item-content>
                                </v-list-item>
                                <v-list-item>
                                    <v-list-item-content>투입자본</v-list-item-content>
                                    <v-list-item-content>{{tcalc_result.tresult.str_investPrice}}원</v-list-item-content>
                                </v-list-item>
                                <v-list-item>
                                    <v-list-item-content>보증금</v-list-item-content>
                                    <v-list-item-content>{{tcalc_result.tresult.str_deposit}}원</v-list-item-content>
                                </v-list-item>
                                <v-list-item>
                                    <v-list-item-content style="color: #B22222">필요한 대출금액</v-list-item-content>
                                    <v-list-item-content style="color: #B22222">{{tcalc_result.tresult.str_requestedLoan}}원</v-list-item-content>
                                </v-list-item>
                            </v-list>
                        </v-container>
                        <v-divider></v-divider>
                        <v-container v-if="tcalc_result.twhich === 'income'">
                            <v-list>
                                <v-list-item>
                                    <v-list-item-content>연리</v-list-item-content>
                                    <v-list-item-content>{{tcalc_result.tresult.str_yearlyInterest}}%</v-list-item-content>
                                </v-list-item>
                                <v-list-item>
                                    <v-list-item-content style="color: #0085FF">비용</v-list-item-content>
                                    <v-list-item-content style="color: #0085FF">{{tcalc_result.tresult.str_cost}}원</v-list-item-content>
                                </v-list-item>
                            </v-list>
                        </v-container>
                        <v-divider></v-divider>
                        <v-container v-if="tcalc_result.twhich === 'income'">
                            <v-list>
                                <v-list-item>
                                    <v-list-item-content>월세</v-list-item-content>
                                    <v-list-item-content>{{tcalc_result.tresult.str_monthlyRent}}원</v-list-item-content>
                                </v-list-item>
                                <v-list-item>
                                    <v-list-item-content>12(1년분)</v-list-item-content>
                                    <v-list-item-content></v-list-item-content>
                                </v-list-item>
                                <v-list-item>
                                    <v-list-item-content style="color: #0085FF">수익</v-list-item-content>
                                    <v-list-item-content style="color: #0085FF">{{tcalc_result.tresult.str_gain}}원</v-list-item-content>
                                </v-list-item>
                            </v-list>
                        </v-container>
                        <v-divider></v-divider>
                        <v-container v-if="tcalc_result.twhich === 'income'">
                            <v-list>
                                <v-list-item>
                                    <v-list-item-content style="color: #0085FF">순수익(1년분)</v-list-item-content>
                                    <v-list-item-content style="color: #0085FF">{{tcalc_result.tresult.str_pureGain}}원</v-list-item-content>
                                </v-list-item>
                                <v-list-item>
                                    <v-list-item-content class="font-weight-bold" style="color: #0085FF">투자수익률</v-list-item-content>
                                    <v-list-item-content class="font-weight-bold" style="color: #0085FF">{{tcalc_result.tresult.str_investmentProfitRate}}%</v-list-item-content>
                                </v-list-item>
                            </v-list>
                        </v-container>
                    </v-card>
                </v-dialog>
            </v-flex>
        </v-layout>
    </template>
    <script>
        import axios from "axios"
        export default {
            name: 'tuja',
            data() {
                return {
                    dialog: false,
                    dialog2: false,
                    price_m: null,
                    price_invest: null,
                    price_wbo: null,
                    price_w: null,
                    rate: null,
                    tcalc_result: {
                        twhich: '',
                        tresult: null
                    },
                    str_purchasePrice: '',
                    str_investPrice: '',
                    str_deposit: '',
                    str_requestedLoan: '',
                    str_yearlyInterest: '',
                    str_cost: '',
                    str_monthlyRent: '',
                    str_gain: '',
                    str_pureGain: '',
                    str_investmentProfitRate: ''
                }
            },
            methods: {
                tuTest() {
                    axios
                        .post("https://www.ddhouse.co.kr/api/v1/public/calculator/income", {
                            price_m: this.price_m,
                            price_invest: this.price_invest,
                            price_wbo: this.price_wbo,
                            price_w: this.price_w,
                            rate: this.rate
                        })
                        .then(res => {
                            console.log(res);
                            this.tcalc_result.twhich = 'income'
                            this.tcalc_result.tresult = res
                                .data
                                console
                                .log(this.tcalc_result)
                        })
                        .catch(err => {
                            console.log(err);
                        });
                }
            }
        }
    </script>

    <style scoped="scoped">
        .btn {
            border: rgb(220, 226, 233);
        }
        .being {
            display: flex;
            justify-content: center;
        }
    </style>