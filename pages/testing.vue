<template>
    <v-layout column="column" row="row">
        <v-flex wrap="wrap">

            <v-dialog
                v-model="dialog"
                fullscreen="fullscreen"
                hide-overlay="hide-overlay"
                transition="dialog-bottom-transition">
                <template v-slot:activator="{ on }">
                    <div class="being">
                        <v-btn max-width="80%" min-width="80%" color="#2D9527" dark="dark" v-on="on">계산하기</v-btn>
                    </div>
                </template>
                <v-card>
                    <v-toolbar dark="dark" color="#2D9527">
                        <v-btn icon="icon" dark="dark" @click="dialog = false">
                            <v-icon>mdi-close</v-icon>
                        </v-btn>
                        <v-toolbar-title>계산 결과</v-toolbar-title>
                    </v-toolbar>
                    <v-container>
                        <v-list>
                            <v-list-item>
                                <v-list-item-content>대상물 구분</v-list-item-content>
                                <v-list-item-content>{{this.$cookies.get('chwi_asset')}}</v-list-item-content>
                            </v-list-item>
                            <v-list-item>
                                <v-list-item-content>취득 구분</v-list-item-content>
                                <v-list-item-content>{{this.$cookies.get('chwi_kind')}}</v-list-item-content>
                            </v-list-item>
                            <v-list-item>
                                <v-list-item-content>면적</v-list-item-content>
                                <v-list-item-content>{{this.$cookies.get('chwi_area')}}</v-list-item-content>
                            </v-list-item>

                            <v-list-item>
                                <v-list-item-content>면적</v-list-item-content>
                                <v-list-item-content>{{this.$cookies.get('chwi_farm')}}</v-list-item-content>
                            </v-list-item>
                            <v-list-item>
                                <v-list-item-content style="color: #0085FF">취득가액</v-list-item-content>
                                <v-list-item-content>{{this.$cookies.get('chwi_price')}}만원</v-list-item-content>
                            </v-list-item>
                        </v-list>
                    </v-container>
                    <v-divider></v-divider>
                    <v-container>
                        <v-list>
                            <v-list-item>
                                <v-list-item-content>취득세</v-list-item-content>
                                <v-list-item-content>{{this.$cookies.get('chwi_everything').chui_deuk_tax}}원</v-list-item-content>
                            </v-list-item>
                            <v-list-item>
                                <v-list-item-content>농어촌특별세</v-list-item-content>
                                <v-list-item-content>{{this.$cookies.get('chwi_everything').nong_eo_chon_special_tax}}원</v-list-item-content>
                            </v-list-item>
                            <v-list-item>
                                <v-list-item-content>지방교육세</v-list-item-content>
                                <v-list-item-content>{{this.$cookies.get('chwi_everything').jibang_education_tax}}원</v-list-item-content>
                            </v-list-item>
                            <v-list-item>
                                <v-list-item-content style="color: #0085FF">세액합계액</v-list-item-content>
                                <v-list-item-content>{{this.$cookies.get('chwi_everything').total_tax}}원</v-list-item-content>
                            </v-list-item>
                        </v-list>
                    </v-container>
                    <v-divider></v-divider>
                    <v-container>
                        <v-list>
                            <v-list-item>
                                <v-list-item-content>인지대</v-list-item-content>
                                <v-list-item-content>{{this.$cookies.get('chwi_everything').inji_tax}}원</v-list-item-content>
                            </v-list-item>
                            <v-list-item>
                                <v-list-item-content>증지대</v-list-item-content>
                                <v-list-item-content>{{this.$cookies.get('chwi_everything').jeungji_tax}}원</v-list-item-content>
                            </v-list-item>
                            <v-list-item>
                                <v-list-item-content>채권할인(변동큼)<br>할인률 4% 기준</v-list-item-content>
                                    <v-list-item-content>{{this.$cookies.get('chwi_everything').bond_discount}}원</v-list-item-content>
                                </v-list-item>
                            </v-list>
                        </v-container>
                        <v-divider></v-divider>
                        <v-container>
                            <v-list>
                                <v-list-item>
                                    <v-list-item-content>법무 기본보수</v-list-item-content>
                                    <v-list-item-content>{{this.$cookies.get('chwi_everything').lawyer_fee}}원</v-list-item-content>
                                </v-list-item>
                                <v-list-item>
                                    <v-list-item-content>부가세</v-list-item-content>
                                    <v-list-item-content>{{this.$cookies.get('chwi_everything').lawyer_fee_tax}}원</v-list-item-content>
                                </v-list-item>
                                <v-list-item>
                                    <v-list-item-content>대행비</v-list-item-content>
                                    <v-list-item-content>{{this.$cookies.get('chwi_everything').dehang}}원</v-list-item-content>
                                </v-list-item>
                                <v-list-item>
                                    <v-list-item-content>등록세</v-list-item-content>
                                    <v-list-item-content>{{this.$cookies.get('chwi_everything').deungrocse}}원</v-list-item-content>
                                </v-list-item>
                                <v-list-item>
                                    <v-list-item-content>일당</v-list-item-content>
                                    <v-list-item-content>{{this.$cookies.get('chwi_everything').ildang}}원</v-list-item-content>
                                </v-list-item>
                            </v-list>
                        </v-container>
                        <v-divider></v-divider>
                        <v-container>
                            <v-list>
                                <v-list-item>
                                    <v-list-item-content style="color: #0085FF">총 비용</v-list-item-content>
                                    <v-list-item-content>{{this.$cookies.get('chwi_everything').total_price}}원</v-list-item-content>
                                </v-list-item>
                            </v-list>
                        </v-container>
                    </v-card>
                </v-dialog>
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
                return {dialog: ''}
            }
        }
    </script>

    <style scoped="scoped">
        .being {
            display: flex;
            justify-content: center;
        }
    </style>