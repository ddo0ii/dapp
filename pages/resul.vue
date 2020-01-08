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
                        <v-btn @click="joongTest" max-width="80%" min-width="80%" color="#2D9527" dark="dark" v-on="on">계산하기</v-btn>
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
                                <v-list-item-content class="font-weight-bold">거래금액</v-list-item-content>
                                <v-list-item-content class="font-weight-bold">hello</v-list-item-content>
                            </v-list-item>
                            <v-list-item>
                                <v-list-item-content>요율</v-list-item-content>
                                <v-list-item-content>hello</v-list-item-content>
                            </v-list-item>

                            <v-list-item>
                                <v-list-item-content style="color: #0085FF">수수료</v-list-item-content>
                                <v-list-item-content style="color: #0085FF">hello</v-list-item-content>
                            </v-list-item>
                        </v-list>
                    </v-container>
                    <v-divider></v-divider>
                    <v-container>
                        <v-list>
                            <v-list-item>
                                <v-list-item-content>상한금액</v-list-item-content>
                                <v-list-item-content>hello</v-list-item-content>
                            </v-list-item>
                            <v-list-item>
                                <v-list-item-content class="font-weight-bold">중개수수료</v-list-item-content>
                                <v-list-item-content class="font-weight-bold">hello</v-list-item-content>
                            </v-list-item>
                            <v-list-item>
                                <v-list-item-content class="font-weight-bold">부가세</v-list-item-content>
                                <v-list-item-content class="font-weight-bold">hello</v-list-item-content>
                            </v-list-item>
                            <v-list-item>
                                <v-list-item-content style="color: #0085FF">부가세포함</v-list-item-content>
                                <v-list-item-content style="color: #0085FF">hello</v-list-item-content>
                            </v-list-item>
                        </v-list>
                    </v-container>

                </v-card>
            </v-dialog>

        </v-flex>
    </v-layout>

</template>
<script>
    import axios from "axios"
    export default {
        name: 'resul',
        data() {
            return {sheet: false, dialog: false,}
        }
    }
</script>

<style scoped="scoped"></style>