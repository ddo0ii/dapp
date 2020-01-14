<template>
    <v-layout column="column" row="row">
        <v-flex wrap="wrap">
            <v-card>
                <v-container>
                    <v-content>
                        대상물 구분 :
                        {{this.$cookies.get('usering').asset_type}}
                        <br/>
                        취득 구분 :
                        {{this.$cookies.get('usering').kind}}
                        <br/>
                        면적 :
                        {{this.$cookies.get('usering').area}}
                        <br/>
                        자경시간 :
                        {{this.$cookies.get('usering').farm_type}}만원<br/>
                        <v-divider></v-divider>
                        취득세 :
                        {{this.$cookies.get('rusering').chui_deuk_tax}}원<br/>
                        농어촌특별세 :
                        {{this.$cookies.get('rusering').nong_eo_chon_special_tax}}원<br/>
                        지방교육세 :
                        {{this.$cookies.get('rusering').jibang_education_tax}}원<br/>
                        세액합계액 :
                        {{this.$cookies.get('rusering').total_tax}}원<br/>
                        <v-divider></v-divider>
                        인지대 :
                        {{this.$cookies.get('rusering').inji_tax}}원<br/>
                        증지대 :
                        {{this.$cookies.get('rusering').jeungji_tax}}원<br/>
                        채권할인(변동큼) 할인률 4% 기준 :
                        {{this.$cookies.get('rusering').bond_discount}}원<br/>
                        <v-divider></v-divider>
                        법무 기본보수 :
                        {{this.$cookies.get('rusering').lawyer_fee}}원<br/>
                        부가세 :
                        {{this.$cookies.get('rusering').lawyer_fee_tax}}원<br/>
                        대행비 :
                        {{this.$cookies.get('rusering').dehang}}원<br/>
                        등록세 :
                        {{this.$cookies.get('rusering').deungrocse}}원<br/>
                        일당 :
                        {{this.$cookies.get('rusering').ildang}}원<br/>
                        <v-divider></v-divider>
                        총 비용 :
                        {{this.$cookies.get('rusering').total_price}}원<br/>
                    </v-content>
                </v-container>
            </v-card>
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

<style scoped="scoped">
    .being {
        display: flex;
        justify-content: center;
    }
</style>