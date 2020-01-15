<template>
    <v-layout column="column" row="row">
        <v-flex wrap="wrap">
            <p>{{$cookies.keys()}}</p>


            <v-expansion-panels>
                <v-expansion-panel>
                    <v-expansion-panel-header>
                        <v-row>
                            <v-col cols="3">
                                취득세
                            </v-col>
                            <v-col cols="4">
                                검색금액 :
                                {{this.$cookies.get('usering0').price}}만원
                            </v-col>
                            <v-col cols="5">
                                총비용 :
                                {{this.$cookies.get('rusering0').total_price}}원
                            </v-col>
                        </v-row>
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                        대상물 구분 :
                        {{this.$cookies.get('usering0').asset_type}}
                        <br/>
                        취득 구분 :
                        {{this.$cookies.get('usering0').kind}}
                        <br/>
                        면적 :
                        {{this.$cookies.get('usering0').area}}
                        <br/>
                        자경시간 :
                        {{this.$cookies.get('usering0').farm_type}}만원<br/>
                        <v-divider></v-divider>
                        취득세 :
                        {{this.$cookies.get('rusering0').chui_deuk_tax}}원<br/>
                        농어촌특별세 :
                        {{this.$cookies.get('rusering0').nong_eo_chon_special_tax}}원<br/>
                        지방교육세 :
                        {{this.$cookies.get('rusering0').jibang_education_tax}}원<br/>
                        세액합계액 :
                        {{this.$cookies.get('rusering0').total_tax}}원<br/>
                        <v-divider></v-divider>
                        인지대 :
                        {{this.$cookies.get('rusering0').inji_tax}}원<br/>
                        증지대 :
                        {{this.$cookies.get('rusering0').jeungji_tax}}원<br/>
                        채권할인(변동큼) 할인률 4% 기준 :
                        {{this.$cookies.get('rusering0').bond_discount}}원<br/>
                        <v-divider></v-divider>
                        법무 기본보수 :
                        {{this.$cookies.get('rusering0').lawyer_fee}}원<br/>
                        부가세 :
                        {{this.$cookies.get('rusering0').lawyer_fee_tax}}원<br/>
                        대행비 :
                        {{this.$cookies.get('rusering0').dehang}}원<br/>
                        등록세 :
                        {{this.$cookies.get('rusering0').deungrocse}}원<br/>
                        일당 :
                        {{this.$cookies.get('rusering0').ildang}}원<br/>
                        <v-divider></v-divider>
                        총 비용 :
                        {{this.$cookies.get('rusering0').total_price}}원<br/>
                    </v-expansion-panel-content>
                </v-expansion-panel>
            </v-expansion-panels>

            <v-simple-table>
                <template>
                    <thead>
                        <tr>
                            <th class="text-left">구분</th>
                            <th class="text-left">검색금액</th>
                            <th class="text-left">총 비용</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr @click="clicking=1">
                            <td>취득액</td>
                            <td>{{this.$cookies.get('usering0').price}}만원</td>
                            <td>{{this.$cookies.get('rusering0').total_price}}원</td>
                        </tr>
                    </tbody>
                </template>
            </v-simple-table>
            <div v-if="clicking===1">
                <Chwi/>
            </div>
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
    import Chwi from '../components/Chwi';
    export default {
        name: 'chwideug',
        data() {
            return {clicking: ''}
        },
        components: {
            Chwi
        }
    }
</script>

<style scoped="scoped"></style>