import SearchModel from "../model/SearchModel.js";
import KeywordModel from "../model/KeywordModel.js";
import HistoryModel from "../model/HistoryModel.js";

new Vue({
  el: "#app",
  data: {
    findWord: "",
    submitted: false,
    tabs: ["인기 검색어", "최근 검색어"],
    items: ['러시안블루','치즈', '오드아이', '고등어' ],
    selectedTab: "",
    keywords: [],
    history: [],
    searchResult: [],
  },

  created() {
    this.selectedTab = this.tabs[0];
    this.fetchKeyword();
    this.fetchHistory();
  },

  computed: {
    findItems: function () {
      if (this.findWord) {
        return this.items.filter(function (value) {
          return value.indexOf(this.findWord) > -1;
        }, this);
      } else {
        return {};
      }
    },
  },

  methods: {
    onClickTitle() {
      this.resetForm();
    },
    onSubmit(e) {
      this.search();
      this.setCookie(this.findWord)
      HistoryModel.add(document.cookie)
    },
    setCookie(name, value, day) {
      const date = new Date();
      date.setTime(date.getTime() + day * 24 * 60 * 60 * 1000);
      document.cookie =
        name + "=" + value + ";expires=" + date.toUTCString() + ";path=/";
    },
    addCookie(id) { 
      const items = this.getCookie('productItems'); 
    },
    getCookie(name) { 
        const value = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
        return value ? value[2] : null;
    },
    delCookie(name) { 
        let date = new Date();
        date.setDate(date.getDate() - 100);
        let Cookie = `${name}=;Expires=${date.toUTCString()}`
        document.cookie = Cookie;
    },
    onKeyup(e) {
      if (!this.findWord.length) this.resetForm();
    },
    onReset(e) {
      this.resetForm();
    },
    onClickRemoveHistory(keyword) {
      HistoryModel.remove(keyword);
      this.fetchHistory();
      this.delCookie(keyword)
    },
    onClickTab(tab) {
      this.selectedTab = tab;
    },
    onClickKeyword(keyword) {
      this.findWord = keyword;
      this.setCookie(this.findWord)
      this.search();
    },
    fetchKeyword() {
      KeywordModel.list().then((data) => {
        this.keywords = data;
      });
    },
    fetchHistory() {
      HistoryModel.add(document.cookie)
      HistoryModel.list().then((data) => {
        this.history = data;
      });
    },
    search() {
      SearchModel.list().then((data) => {
        this.submitted = true;
        this.searchResult = [...data];
      });
      HistoryModel.add(this.findWord);
      this.fetchHistory();
    },
    resetForm() {
      this.findWord = "";
      this.submitted = false;
      this.searchResult = [];
    },
  },
});
