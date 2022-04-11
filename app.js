function getRandom(max, min) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
    };
  },

  methods: {
    attackMonster() {
      const attackValue = getRandom(5, 12);
      this.monsterHealth -= attackValue;
      this.attackPlayer();
    },
    attackPlayer() {
      const attackValue = getRandom(8, 15);
      this.playerHealth -= attackValue;
    },
  },

  computed: {
    calculatePlayerWidth() {
      return {
        width: `${this.playerHealth}%`,
      };
    },
    calculateMonsterWidth() {
      return {
        width: `${this.monsterHealth}%`,
      };
    },
  },
});

app.mount('#game');
