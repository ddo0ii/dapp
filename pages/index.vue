<template>
    <v-app>
        <v-layout column="column">
            <v-flex xs12="xs12" sm8="sm8" md6="md6" class="bwcolor">
                <v-flex class="text-center" align-center="align-center">
                    <img src="/rsmalllogo.png" alt="Vuetify.js" class="mb-5"></v-flex>
                    <div class="text-center">
                        <p class="font-weight-bold">어떤 계산기를 찾고 계신가요?</p>
                    </div>
                    <v-row no-gutters="no-gutters" style="flex-wrap: wrap;">
                        <v-col
                            cols="1"
                            style="min-width:50%; max-width:50%;"
                            class="flex-grow-1 flex-shrink-0; text-center">
                            <v-card
                                class="lining"
                                tile="tile"
                                nuxt="nuxt"
                                to="/chwideug">양도소득세</v-card>
                        </v-col>
                        <v-col
                            cols="1"
                            style="min-width:50%; max-width:50%;"
                            class="flex-grow-1 flex-shrink-0; text-center">
                            <v-card
                                class="lining"
                                tile="tile"
                                height="150"
                                nuxt="nuxt"
                                to="/chwideug">취득세</v-card>
                        </v-col>
                        <v-col
                            cols="1"
                            style="min-width:50%; max-width:50%;"
                            class="flex-grow-1 flex-shrink-0; text-center">
                            <v-card
                                class="lining"
                                tile="tile"
                                height="150"
                                nuxt="nuxt"
                                to="/pyeongsu">투자수익률</v-card>
                        </v-col>
                        <v-col
                            cols="1"
                            style="min-width:50%; max-width:50%;"
                            class="flex-grow-1 flex-shrink-0; text-center">
                            <v-card
                                class="lining"
                                tile="tile"
                                height="150"
                                nuxt="nuxt"
                                to="/jeungyeo">증여세</v-card>
                        </v-col>
                        <v-col
                            cols="1"
                            style="min-width:50%; max-width:50%;"
                            class="flex-grow-1 flex-shrink-0; text-center">
                            <v-card
                                class="lining"
                                tile="tile"
                                height="150"
                                nuxt="nuxt"
                                to="/joonggae">중개보수료</v-card>
                        </v-col>
                        <v-col
                            cols="1"
                            style="min-width:50%; max-width:50%;"
                            class="flex-grow-1 flex-shrink-0; text-center">
                            <v-card
                                class="lining"
                                tile="tile"
                                height="150"
                                nuxt="nuxt"
                                to="/doro">도로명주소</v-card>
                        </v-col>
                        <v-col
                            cols="1"
                            style="min-width:50%; max-width:50%;"
                            class="flex-grow-1 flex-shrink-0; text-center">
                            <v-card
                                class="lining"
                                tile="tile"
                                height="150"
                                nuxt="nuxt"
                                to="/pyeongsu">평수환산</v-card>
                        </v-col>
                        <v-col
                            cols="1"
                            style="min-width:50%; max-width:50%;"
                            class="flex-grow-1 flex-shrink-0; text-center">
                            <v-card
                                class="lining"
                                tile="tile"
                                height="150"
                                nuxt="nuxt"
                                to="/pyeongsu">이자계산기</v-card>
                        </v-col>
                    </v-row>
                </v-flex>
            </v-layout>
        </v-app>
    </template>
    <style>
        .lining {
            height: 150px;
            line-height: 150px;
        }
        .bwcolor{
            background-color: white;
        }
    </style>