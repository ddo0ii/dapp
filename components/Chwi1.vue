<template>
    <v-layout column="column" row="row">
        <v-flex wrap="wrap">
            <v-container>
                <v-list>
                    <v-list-item>
                        <v-list-item-content>대상물 구분</v-list-item-content>
                        <v-list-item-content>{{this.$cookies.get('usering1').asset_type}}</v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                        <v-list-item-content>취득 구분</v-list-item-content>
                        <v-list-item-content>{{this.$cookies.get('usering1').kind}}</v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                        <v-list-item-content>면적</v-list-item-content>
                        <v-list-item-content>{{this.$cookies.get('usering1').area}}</v-list-item-content>
                    </v-list-item>

                    <v-list-item>
                        <v-list-item-content>자경시간</v-list-item-content>
                        <v-list-item-content>{{this.$cookies.get('usering1').farm_type}}</v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                        <v-list-item-content style="color: #0085FF">취득가액</v-list-item-content>
                        <v-list-item-content>{{this.$cookies.get('usering1').price}}만원</v-list-item-content>
                    </v-list-item>
                </v-list>
            </v-container>
            <v-divider></v-divider>
            <v-container>
                <v-list>
                    <v-list-item>
                        <v-list-item-content>취득세</v-list-item-content>
                        <v-list-item-content>{{this.$cookies.get('rusering1').chui_deuk_tax}}원</v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                        <v-list-item-content>농어촌특별세</v-list-item-content>
                        <v-list-item-content>{{this.$cookies.get('rusering1').nong_eo_chon_special_tax}}원</v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                        <v-list-item-content>지방교육세</v-list-item-content>
                        <v-list-item-content>{{this.$cookies.get('rusering1').jibang_education_tax}}원</v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                        <v-list-item-content style="color: #0085FF">세액합계액</v-list-item-content>
                        <v-list-item-content>{{this.$cookies.get('rusering1').total_tax}}원</v-list-item-content>
                    </v-list-item>
                </v-list>
            </v-container>
            <v-divider></v-divider>
            <v-container>
                <v-list>
                    <v-list-item>
                        <v-list-item-content>인지대</v-list-item-content>
                        <v-list-item-content>{{this.$cookies.get('rusering1').inji_tax}}원</v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                        <v-list-item-content>증지대</v-list-item-content>
                        <v-list-item-content>{{this.$cookies.get('rusering1').jeungji_tax}}원</v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                        <v-list-item-content>채권할인(변동큼)<br>할인률 4% 기준</v-list-item-content>
                            <v-list-item-content>{{this.$cookies.get('rusering1').bond_discount}}원</v-list-item-content>
                        </v-list-item>
                    </v-list>
                </v-container>
                <v-divider></v-divider>
                <v-container>
                    <v-list>
                        <v-list-item>
                            <v-list-item-content>법무 기본보수</v-list-item-content>
                            <v-list-item-content>{{this.$cookies.get('rusering1').lawyer_fee}}원</v-list-item-content>
                        </v-list-item>
                        <v-list-item>
                            <v-list-item-content>부가세</v-list-item-content>
                            <v-list-item-content>{{this.$cookies.get('rusering1').lawyer_fee_tax}}원</v-list-item-content>
                        </v-list-item>
                        <v-list-item>
                            <v-list-item-content>대행비</v-list-item-content>
                            <v-list-item-content>{{this.$cookies.get('rusering1').dehang}}원</v-list-item-content>
                        </v-list-item>
                        <v-list-item>
                            <v-list-item-content>등록세</v-list-item-content>
                            <v-list-item-content>{{this.$cookies.get('rusering1').deungrocse}}원</v-list-item-content>
                        </v-list-item>
                        <v-list-item>
                            <v-list-item-content>일당</v-list-item-content>
                            <v-list-item-content>{{this.$cookies.get('rusering1').ildang}}원</v-list-item-content>
                        </v-list-item>
                    </v-list>
                </v-container>
                <v-divider></v-divider>
                <v-container>
                    <v-list>
                        <v-list-item>
                            <v-list-item-content style="color: #0085FF">총 비용</v-list-item-content>
                            <v-list-item-content>{{this.$cookies.get('rusering1').total_price}}원</v-list-item-content>
                        </v-list-item>
                    </v-list>
                </v-container>
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
            data() {
                return {}
            }
        }
    </script>