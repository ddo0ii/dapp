<template>
    <v-layout column="column" row="row">
        <v-flex wrap="wrap">
            <v-list-item>
                <v-list-item-content>
                    <p class="font-weight-black">대상물 구분</p>
                    <v-btn-toggle
                        v-model="text1"
                        tile="tile"
                        color="blue"
                        group="group"
                        style="flex-wrap: wrap; width: 100%">
                        <v-btn class="caption" kind="wonli" value="a1" height="40px" style="width: 30%">원리금균등</v-btn>
                        <v-btn class="caption" kind="won" value="a2" height="40px" style="width: 30%">원금균등</v-btn>
                        <v-btn class="caption" kind="man" value="a3" height="40px" style="width: 30%">만기일시</v-btn>
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
                                duration="duration"
                                placeholder="대출기간 입력"
                                suffix="개월"></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="4">
                            <v-subheader class="caption" color="blue darken-4">대출금액</v-subheader>
                        </v-col>
                        <v-col cols="7">
                            <v-text-field class="caption" price="price" placeholder="대출금액 입력" suffix="만원"></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="4">
                            <v-subheader class="caption" color="blue darken-4">연이자율</v-subheader>
                        </v-col>
                        <v-col cols="7">
                            <v-text-field class="caption" rate="rate" placeholder="연이자율 입력" suffix="%"></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="4">
                            <v-subheader class="caption" color="blue darken-4">거치기간</v-subheader>
                        </v-col>
                        <v-col cols="7">
                            <v-text-field
                                class="caption"
                                duration_g="duration_g"
                                placeholder="거치기간 입력"
                                suffix="개월"></v-text-field>
                        </v-col>
                    </v-row>
                    <div class="being">
                        <v-btn max-width="80%" min-width="80%" color="#2D9527" dark="dark">계산하기</v-btn>
                    </div>

                </v-list-item-content>
            </v-list-item>

        </v-flex>
    </v-layout>
</template>
<script>
    export default {
        name: 'jeungyeo',
        data() {
            return {
                text1: 'a1',
                text2: 'b1',
                kind: null,
                duration: null,
                duration_g: null,
                rate: null,
                price: null
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