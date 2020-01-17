<template>
    <v-layout column="column" row="row">
        <v-flex wrap="wrap">
            <v-dialog
                v-model="dialog"
                fullscreen="fullscreen"
                hide-overlay="hide-overlay"
                transition="dialog-bottom-transition">

                <v-card>
                    <v-toolbar dark="dark" color="#2D9527">
                        <v-btn icon="icon" dark="dark" @click="dialog = false">
                            <v-icon>mdi-close</v-icon>
                        </v-btn>
                        <v-toolbar-title>계산 결과</v-toolbar-title>
                    </v-toolbar>
                    <div v-if="this.$cookies.get('listing').naming==='취득세'">
                        <Chwi/>
                    </div>
                </v-card>

            </v-dialog>

            <v-simple-table>
                <template>
                    <thead>
                        <tr>
                            <th class="text-left">구분</th>
                            <th class="text-left">검색금액</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr @click.stop="dialog = true">
                            <td>{{this.$cookies.get('listing').naming}}</td>
                            <td>{{this.$cookies.get('listing').price}}원</td>
                        </tr>
                        <tr>
                            <td>{{this.$cookies.get('listing').naming}}</td>
                            <td>{{this.$cookies.get('listing').price}}원</td>
                        </tr>
                        <tr>
                            <td>{{this.$cookies.get('listing').naming}}</td>
                            <td>{{this.$cookies.get('listing').price}}원</td>
                        </tr>
                        <tr>
                            <td>{{this.$cookies.get('listing').naming}}</td>
                            <td>{{this.$cookies.get('listing').price}}원</td>
                        </tr>
                    </tbody>
                </template>
            </v-simple-table>
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
        data() {
            return {dialog: ''}
        },
        components: {
            Chwi
        }
    }
</script>

<style scoped="scoped"></style>