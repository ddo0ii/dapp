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
                    <div v-if="this.$cookies.get('usering0').naming==='취득세'">
                        <Chwi/>
                    </div>
                    <div v-if="this.$cookies.get('usering0').naming==='증여세'">
                        <Jeung/>
                    </div>
                </v-card>

            </v-dialog>

            <v-dialog
                v-model="dialog1"
                fullscreen="fullscreen"
                hide-overlay="hide-overlay"
                transition="dialog-bottom-transition">

                <v-card>
                    <v-toolbar dark="dark" color="#2D9527">
                        <v-btn icon="icon" dark="dark" @click="dialog1 = false">
                            <v-icon>mdi-close</v-icon>
                        </v-btn>
                        <v-toolbar-title>계산 결과</v-toolbar-title>
                    </v-toolbar>
                    <div v-if="this.$cookies.get('usering1').naming==='취득세'">
                        <Chwi1/>
                    </div>
                    <div v-if="this.$cookies.get('usering1').naming==='증여세'">
                        <Jeung1/>
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
                            <td>{{this.$cookies.get('usering0').naming}}</td>
                            <td>{{this.$cookies.get('usering0').price}}원</td>
                        </tr>
                        <tr @click.stop="dialog1 = true">
                            <td>{{this.$cookies.get('usering1').naming}}</td>
                            <td>{{this.$cookies.get('usering1').price}}원</td>
                        </tr>
                        <tr>
                            <td>{{this.$cookies.get('usering2').naming}}</td>
                            <td>{{this.$cookies.get('usering2').price}}원</td>
                        </tr>
                        <tr>
                            <td>{{this.$cookies.get('usering3').naming}}</td>
                            <td>{{this.$cookies.get('usering3').price}}원</td>
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
    import Chwi1 from '../components/Chwi1';
    import Jeung from '../components/Jeung';
    import Jeung1 from '../components/Jeung1';
    export default {
        data() {
            return {dialog: '', dialog1: ''}
        },
        components: {
            Chwi,
            Chwi1,
            Jeung,
            Jeung1
        }
    }
</script>

<style scoped="scoped"></style>