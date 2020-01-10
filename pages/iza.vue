<template>
    <v-layout column="column" row="row">
        <v-flex wrap="wrap">
            <v-list-item>
                <v-list-item-content>
                    <p class="font-weight-black">대상물 구분</p>
                    <v-btn-toggle
                        v-model="kind"
                        tile="tile"
                        color="blue"
                        group="group"
                        style="flex-wrap: wrap; width: 100%">
                        <v-btn class="caption" value="wonli" height="40px" style="width: 30%">원리금균등</v-btn>
                        <v-btn class="caption" value="won" height="40px" style="width: 30%">원금균등</v-btn>
                        <v-btn class="caption" value="man" height="40px" style="width: 30%">만기일시</v-btn>
                    </v-btn-toggle>
                </v-list-item-content>
            </v-list-item>

            <v-list-item>
                <v-list-item-content>
                    <v-row>
                        <v-col cols="4">
                            <v-subheader class="caption" color="blue darken-4">대출기간</v-subheader>
                        </v-col>
                        <v-col cols="7">
                            <v-text-field
                                class="caption"
                                v-model="duration"
                                placeholder="대출기간 입력"
                                suffix="개월"></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="4">
                            <v-subheader class="caption" color="blue darken-4">대출금액</v-subheader>
                        </v-col>
                        <v-col cols="7">
                            <v-text-field class="caption" v-model="price" placeholder="대출금액 입력" suffix="만원"></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="4">
                            <v-subheader class="caption" color="blue darken-4">연이자율</v-subheader>
                        </v-col>
                        <v-col cols="7">
                            <v-text-field class="caption" v-model="rate" placeholder="연이자율 입력" suffix="%"></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="4">
                            <v-subheader class="caption" color="blue darken-4">거치기간</v-subheader>
                        </v-col>
                        <v-col cols="7">
                            <v-text-field
                                class="caption"
                                v-model="duration_g"
                                placeholder="거치기간 입력"
                                suffix="개월"></v-text-field>
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
                                    @click="iTest"
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

                            <v-container v-if="icalc_result.iwhich === 'interest'">
                                <v-list>
                                    <v-list-item>
                                        <v-list-item-content class="font-weight-bold">대출원금</v-list-item-content>
                                        <v-list-item-content>{{price*10000}}원</v-list-item-content>
                                    </v-list-item>
                                    <v-list-item>
                                        <v-list-item-content class="font-weight-bold">총대출이자</v-list-item-content>
                                        <v-list-item-content>{{icalc_result.iresult.total_interest}}원</v-list-item-content>
                                    </v-list-item>
                                    <v-list-item>
                                        <v-list-item-content class="font-weight-bold">총상환금액</v-list-item-content>
                                        <v-list-item-content>{{icalc_result.iresult.total_interest+price*10000}}원</v-list-item-content>
                                    </v-list-item>
                                </v-list>
                            </v-container>
                            <v-divider></v-divider>
                            <v-container v-if="icalc_result.iwhich === 'interest'">
                                <table width="100%">
                                    <thead>
                                        <tr>
                                            <td class="caption font-weight-bold" width="10%">회차</td>
                                            <td class="caption font-weight-bold" width="22.5%">납입원금</td>
                                            <td class="caption font-weight-bold" width="22.5%">대출이자</td>
                                            <td class="caption font-weight-bold" width="22.5%">월상환금</td>
                                            <td class="caption font-weight-bold" width="22.5%">대출잔금</td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(item, idx) in icalc_result.iresult.list" :key="idx">
                                            <td class="caption font-weight-bold" width="10%">{{item.index}}</td>
                                            <td class="caption font-weight-bold" width="22.5%">{{item.originRepay}}</td>
                                            <td class="caption font-weight-bold" width="22.5%">{{item.interestRepay}}</td>
                                            <td class="caption font-weight-bold" width="22.5%">{{item.totalRepay}}</td>
                                            <td class="caption font-weight-bold" width="22.5%">{{item.remainAmount}}</td>
                                        </tr>
                                    </tbody>

                                </table>

                                <!-- <v-list> <v-list-item> <v-list-item-content class="caption
                                font-weight-bold">회차</v-list-item-content> <v-list-item-content class="caption
                                font-weight-bold">납임원금</v-list-item-content> <v-list-item-content class="caption
                                font-weight-bold">대출이자</v-list-item-content> <v-list-item-content class="caption
                                font-weight-bold">월상환금</v-list-item-content> <v-list-item-content class="caption
                                font-weight-bold">대출잔금</v-list-item-content> </v-list-item> <v-list-item
                                v-for="(listed, i) in list" :key="i"> <v-list-item-content
                                class="caption">{{icalc_result.iresult.listed.index}}</v-list-item-content>
                                <v-list-item-content
                                class="caption">{{icalc_result.iresult.listed.originRepay}}</v-list-item-content>
                                <v-list-item-content
                                class="caption">{{icalc_result.iresult.listed.interestRepay}}</v-list-item-content>
                                <v-list-item-content
                                class="caption">{{icalc_result.iresult.listed.totalRepay}}</v-list-item-content>
                                <v-list-item-content
                                class="caption">{{icalc_result.iresult.listed.remainAmount}}</v-list-item-content>
                                </v-list-item> </v-list> -->

                            </v-container>

                        </v-card>
                    </v-dialog>

                </v-list-item-content>
            </v-list-item>

        </v-flex>
    </v-layout>
</template>
<script>
    import axios from "axios"
    export default {
        name: 'jeungyeo',
        data() {
            return {
                kind: 'wonli',
                duration: null,
                duration_g: null,
                rate: null,
                price: null,
                dialog: false,
                total_interest: '',
                index: '',
                originRepay: '',
                interestRepay: '',
                totalRepay: '',
                remainAmount: '',
                icalc_result: {
                    iwhich: '',
                    iresult: null
                },
                list: [],
                origin: '',
            }
        },
        methods: {
            iTest() {
                axios
                    .post("https://www.ddhouse.co.kr/api/v1/public/calculator/interest", {
                        kind: this.kind,
                        duration: this.duration,
                        duration_g: this.duration_g,
                        rate: this.rate,
                        price: this.price
                    })
                    .then(res => {
                        console.log(res);
                        this.icalc_result.iwhich = 'interest'
                        this.icalc_result.iresult = res
                            .data
                            console
                            .log(this.icalc_result)
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