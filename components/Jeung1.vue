<template>
    <v-layout column="column" row="row">
        <v-flex wrap="wrap">
            <v-container>
                <v-list>
                    <v-list-item>
                        <v-list-item-content>증여금액</v-list-item-content>
                        <v-list-item-content>{{this.$cookies.get('rusering1').giftPrice}}원</v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                        <v-list-item-content>공제금액</v-list-item-content>
                        <v-list-item-content>{{this.$cookies.get('rusering1').deductedPrice}}원</v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                        <v-list-item-content style="color: #0085FF">과세표준</v-list-item-content>
                        <v-list-item-content>{{this.$cookies.get('rusering1').taxStandard}}원</v-list-item-content>
                    </v-list-item>
                </v-list>
            </v-container>
            <v-divider></v-divider>
            <v-container>
                <v-list>
                    <v-list-item>
                        <v-list-item-content>세율</v-list-item-content>
                        <v-list-item-content>{{this.$cookies.get('rusering1').taxRatio}}%</v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                        <v-list-item-content>누진공제액</v-list-item-content>
                        <v-list-item-content>{{this.$cookies.get('rusering1').graduallyAdvancedDeduction}}원</v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                        <v-list-item-content style="color: #0085FF">산출세액</v-list-item-content>
                        <v-list-item-content>{{this.$cookies.get('rusering1').calculatedTax}}원</v-list-item-content>
                    </v-list-item>
                </v-list>
            </v-container>
            <v-divider></v-divider>
            <v-container>
                <v-list>
                    <v-list-item>
                        <v-list-item-content>자진신고시 공제</v-list-item-content>
                        <v-list-item-content>{{this.$cookies.get('rusering1').selfAssessDeduction}}원</v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                        <v-list-item-content style="color: #0085FF">증여세</v-list-item-content>
                        <v-list-item-content>{{this.$cookies.get('rusering1').giftTax}}원</v-list-item-content>
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