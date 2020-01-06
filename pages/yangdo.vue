<template>
    <v-layout column="column" row="row">
        <v-flex wrap="wrap">
            <v-dialog v-model="dialog" width="600px">
                <template v-slot:activator="{ on }">
                    <v-btn
                        absolute="absolute"
                        dark="dark"
                        fab="fab"
                        right="right"
                        small="small"
                        color="orange"
                        v-on="on">
                        <v-icon small="small">mdi-help</v-icon>
                    </v-btn>
                </template>
                <v-card>
                    <v-card-title>
                        <span class="headline">일시적 1가구 2주택 조건</span>
                    </v-card-title>
                    <v-card-text>기존 주택을 새 주택 구입일로부터 3년 이내 (일부 특정 경우에는 5년 이내)에 팔아야 일시적 1가구 2주택 조건을 만족합니다.
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                            class="caption"
                            color="green darken-1"
                            text="text"
                            @click="dialog = false">OK</v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
            <v-list-item>
                <v-list-item-content>
                    <p class="font-weight-black">대상물의 등기 여부</p>
                    <v-btn-toggle
                        v-model="text"
                        mjws="m"
                        tile="tile"
                        color="blue"
                        group="group"
                        style="flex-wrap: wrap; width: 100%">
                        <v-btn
                            class="caption"
                            registration="yes"
                            value="a1"
                            height="40px"
                            style="width: 45%">등기</v-btn>
                        <v-btn
                            class="caption"
                            registration="no"
                            value="a2"
                            height="40px"
                            style="width: 45%">미등기</v-btn>
                    </v-btn-toggle>
                </v-list-item-content>
            </v-list-item>

            <div v-if="text=='a1'">
                <v-list-item>
                    <v-list-item-content>
                        <p class="font-weight-black">대상물 구분</p>
                        <v-btn-toggle
                            v-model="text2"
                            tile="tile"
                            color="blue"
                            group="group"
                            style="flex-wrap: wrap; width: 100%">
                            <v-btn
                                class="caption"
                                asset_type="house"
                                value="b1"
                                height="40px"
                                style="width: 45%">주택</v-btn>
                            <v-btn
                                class="caption"
                                asset_type="land"
                                value="b2"
                                height="40px"
                                style="width: 45%">비사업용토지</v-btn>
                            <v-btn
                                class="caption"
                                asset_type="etc"
                                value="b3"
                                height="40px"
                                style="width: 90%">기타 부동산(사업용 토지, 분양권 등)</v-btn>
                        </v-btn-toggle>
                    </v-list-item-content>
                </v-list-item>

                <div v-if="text2=='b1'">
                    <v-list-item>
                        <v-list-item-content>
                            <p class="font-weight-black">일시적 1가구 2주택 조건</p>

                            <v-btn-toggle
                                v-model="text3"
                                tile="tile"
                                color="blue"
                                group="group"
                                style="flex-wrap: wrap; width: 100%">
                                <v-btn
                                    class="caption"
                                    house_count="one"
                                    value="c1"
                                    height="40px"
                                    style="width: 45%">1주택자(일시적2주택자)</v-btn>
                                <v-btn
                                    class="caption"
                                    house_count="two"
                                    value="c2"
                                    height="40px"
                                    style="width: 45%">2주택자이상</v-btn>
                            </v-btn-toggle>
                        </v-list-item-content>
                    </v-list-item>
                </div>
            </div>

            <v-list-item>
                <v-list-item-content>
                    <p class="font-weight-black">금액</p>
                    <v-col cols="6">
                        <v-menu
                            ref="menu"
                            v-model="menu"
                            :close-on-content-click="false"
                            :return-value.sync="date"
                            transition="scale-transition"
                            offset-y="offset-y"
                            min-width="290px">
                            <template v-slot:activator="{ on }">
                                <v-text-field
                                    class="caption"
                                    date_buy="date_buy"
                                    v-model="date"
                                    label="양도일선택"
                                    readonly="readonly"
                                    v-on="on"></v-text-field>
                            </template>
                            <v-date-picker v-model="date" no-title="no-title" scrollable="scrollable">
                                <v-btn class="caption" text="text" color="primary" @click="menu = false">Cancel</v-btn>
                                <v-btn
                                    class="caption"
                                    text="text"
                                    color="primary"
                                    @click="$refs.menu.save(date)">OK</v-btn>
                            </v-date-picker>
                        </v-menu>
                    </v-col>
                    <v-col cols="6">
                        <v-text-field
                            class="caption"
                            price_buy="price_buy"
                            placeholder="양도가액"
                            suffix="만원"></v-text-field>
                    </v-col>

                    <v-col cols="6">
                        <v-menu
                            ref="menu2"
                            v-model="menu2"
                            :close-on-content-click="false"
                            :return-value.sync="date"
                            transition="scale-transition"
                            offset-y="offset-y"
                            min-width="290px">
                            <template v-slot:activator="{ on }">
                                <v-text-field
                                    class="caption"
                                    date_transfer="date_transfer"
                                    v-model="date2"
                                    label="취득일선택"
                                    readonly="readonly"
                                    v-on="on"></v-text-field>
                            </template>
                            <v-date-picker v-model="date2" no-title="no-title" scrollable="scrollable">
                                <v-btn class="caption" text="text" color="primary" @click="menu2 = false">Cancel</v-btn>
                                <v-btn
                                    class="caption"
                                    text="text"
                                    color="primary"
                                    @click="$refs.menu2.save(date)">OK</v-btn>
                            </v-date-picker>
                        </v-menu>
                    </v-col>
                    <v-col cols="6">
                        <v-text-field
                            class="caption"
                            price_transfer="price_transfer"
                            placeholder="취득가액"
                            suffix="만원"></v-text-field>
                    </v-col>

                    <v-col cols="4">
                        <v-subheader class="caption" color="green darken-4">소요경비</v-subheader>
                    </v-col>
                    <v-col cols="7">
                        <v-text-field
                            class="caption"
                            price_etc="price_etc"
                            placeholder="소요경비 입력"
                            suffix="만원"></v-text-field>
                    </v-col>

                    <div class="being">
                        <v-btn
                            @click="postTest"
                            max-width="80%"
                            min-width="80%"
                            color="#2D9527"
                            dark="dark">계산하기</v-btn>
                    </div>

                </v-list-item-content>
            </v-list-item>

        </v-flex>
    </v-layout>
</template>
<script>
    import {mapState, mapActions} from "vuex"
    import axios from "axios"

    export default {
        name: 'yangdo',
        date: new Date()
            .toISOString()
            .substr(0, 10),
        data() {
            return {
                text: 'a1',
                text2: 'b1',
                text3: 'c1',
                date: '',
                date2: '',
                modal: false,
                menu: false,
                menu2: false,
                dialog: false,
                hidden: false,
                registration: null,
                asset_type: null,
                house_count: null,
                date_buy: null,
                price_buy: null,
                date_transfer: null,
                price_transfer: null,
                price_etc: null
            }
        },
        methods: {
            postTest() {
                axios
                    .post('https://www.ddhouse.co.kr/api/v1/public/calculator/tax-transfer', {
                        mjws: "m",
                        asset_type: "house",
                        price_m: "123",
                        price_wbo: "",
                        price_w: "",
                        price_current: "",
                        price_premium: ""
                    })
                    .then(res => {
                        console.log(res);
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