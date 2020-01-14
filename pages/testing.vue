<template>
    <v-layout column="column" row="row">
        <v-flex wrap="wrap">
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
                            <td>{{this.$cookies.get('usering').price}}만원</td>
                            <td>{{this.$cookies.get('rusering').total_price}}원</td>
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
            Chwi,
        },
    }
</script>

<style scoped="scoped">
</style>