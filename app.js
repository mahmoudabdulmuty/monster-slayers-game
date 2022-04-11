function getRandom(max, min) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
      currentRound: 0,
    };
  },

  methods: {
    attackMonster() {
      this.currentRound++;
      const attackValue = getRandom(5, 12);
      this.monsterHealth -= attackValue;
      this.attackPlayer();
    },
    attackPlayer() {
      const attackValue = getRandom(8, 15);
      this.playerHealth -= attackValue;
    },
    specialAttack() {
      this.currentRound++;
      const attackValue = getRandom(10, 25);
      this.monsterHealth -= attackValue;
      this.attackPlayer();
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
    useSpecialAttack() {
      return this.currentRound % 3 !== 0;
    },
  },
});

app.mount('#game');
