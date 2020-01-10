<template>
    <v-app>
        <v-navigation-drawer
            v-model="drawer"
            :mini-variant="miniVariant"
            :clipped="clipped"
            fixed="fixed"
            app="app">
            <v-list>
                <v-list-item
                    v-for="(item, i) in items"
                    :key="i"
                    :to="item.to"
                    router="router"
                    exact="exact">
                    <v-list-item-action>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title v-text="item.title"/>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
        <v-app-bar
            :clipped-left="clipped"
            fixed="fixed"
            app="app"
            color="white"
            flat="flat">
            <v-app-bar-nav-icon @click.stop="drawer = !drawer"/>
            <v-toolbar-title>ddgye</v-toolbar-title>
            <v-spacer/>

            <template v-slot:extension>
                <v-tabs
                    background-color="white"
                    color="black accent-4"
                    center-active="center-active"
                    >
                    <v-tab to="/yangdo">양도소득세</v-tab>
                    <v-tab to="/chwideug">취득세</v-tab>
                    <v-tab to="/tuja">투자수익률</v-tab>
                    <v-tab to="/jeungyeo">증여세</v-tab>
                    <v-tab to="/joonggae">중개보수료</v-tab>
                    <v-tab to="/doro">도로명주소</v-tab>
                    <v-tab to="/pyeongsu">평수환산</v-tab>
                    <v-tab to="/iza">이자계산</v-tab>
                </v-tabs>
            </template>
        </v-app-bar>

        <div class="wcolor">

            <v-content>
                <v-container>
                    <nuxt/>
                </v-container>
            </v-content>
        </div>
    </v-app>
</template>

<script>

    export default {

        data() {
            return {
                title: 'DDhouseCal',
                clipped: false,
                drawer: false,
                fixed: false,
                items: [
                    {
                        icon: 'mdi-apps',
                        title: 'Welcome',
                        to: '/'
                    }, {
                        icon: 'mdi-note',
                        title: '양도소득세',
                        to: '/yangdo'
                    }, {
                        icon: 'mdi-domain',
                        title: '등기비용(취득세, 채권)',
                        to: '/chwideug'
                    }, {
                        icon: 'mdi-equalizer',
                        title: '투자수익률',
                        to: '/tuja'
                    }, {
                        icon: 'mdi-subtitles',
                        title: '증여세',
                        to: '/jeungyeo'
                    }, {
                        icon: 'mdi-waves',
                        title: '중개보수료',
                        to: '/joonggae'
                    }, {
                        icon: 'mdi-file',
                        title: '도로명주소',
                        to: '/doro'
                    }, {
                        icon: 'mdi-home',
                        title: '평수 환산',
                        to: '/pyeongsu'
                    }, {
                        icon: 'mdi-calculator',
                        title: '이자 계산기',
                        to: '/iza'
                    }
                ],
                miniVariant: false,
                right: true
            }
        }
    }
</script>

<style>
    .being {
        display: flex;
        justify-content: center;
    }
    .wcolor {
        background: white;
    }
</style>