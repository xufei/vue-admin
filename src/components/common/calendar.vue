<template>
<div>
    <header class="header">
        <div class="weekday">星期{{weekdayArr[calendar.currentDate.getDay()]}}</div>
        <div>
            <div class="month">{{monthArr[calendar.month]}}</div>
            <div class="date">{{calendar.date}}</div>
        </div>
        <div class="year">{{calendar.year}}</div>
    </header>

    <div class="date-view" v-if="viewMode==0">
        <div class="calendar-row calendar-header">
            <div class="prev" @click="calendar.previousYear()">
                <a href="javascript:void(0)">‹‹</a>
            </div>
            <div class="prev" @click="calendar.previousMonth()">
                <a href="javascript:void(0)">‹</a>
            </div>
            <div class="date-title" @click="showYear()">
                <a href="javascript:void(0)">{{calendar.year + "年 " + monthArr[calendar.month]}}</a>
            </div>
            <div class="next" @click="calendar.nextMonth()">
                <a href="javascript:void(0)">›</a>
            </div>
            <div class="next" @click="calendar.nextYear()">
                <a href="javascript:void(0)">››</a>
            </div>
        </div>

        <div class="calendar-row">
            <div class="day" v-for="day in weekdayArr">
                <span>{{day}}</span>
            </div>
        </div>

        <div class="calendar-row" v-for="row in calendar.days">
            <div class="date" v-for="day in row" track-by="$index"
                 :class="{'disabled':!dateInRange(day), 'active':isToday(day)}">
                <a href="javascript:void(0)" v-if="day"
                 @click="selectDate(day)">{{day}}</a>
                <span v-if="!day"></span>
            </div>
        </div>
    </div>
    <div class="month-view" v-if="viewMode==1">
        <div class="calendar-row calendar-header">
            <div class="prev" @click="calendar.previousYear()">
                <a href="javascript:void(0)">‹</a>
            </div>
            <div class="month-title" @click="viewMode=2">
                <a href="javascript:void(0)">{{calendar.year}}</a>
            </div>
            <div class="next" @click="calendar.nextYear()">
                <a href="javascript:void(0)">›</a>
            </div>
        </div>

        <div class="calendar-row">
            <div class="month"
                  v-for="month in calendar.months"
                  :class="{'active':month==calendar.months[calendar.month]}"
                  @click="selectMonth($index)">
                <a href="javascript:void(0)">{{monthArr[month]}}</a>
            </div>
        </div>
    </div>

    <div class="year-view" v-if="viewMode==2">
        <div class="calendar-row calendar-header">
            <div class="prev" @click="calendar.previousAge()">
                <a href="javascript:void(0)">‹</a>
            </div>
            <div class="year-title">
                <span>{{calendar.years[0] + " - " + calendar.years[9]}}</span>
            </div>
            <div class="next" @click="calendar.nextAge()">
                <a href="javascript:void(0)">›</a>
            </div>
        </div>

        <div class="calendar-row">
            <div class="year"
                 v-for="year in calendar.years"
                 :class="{'active':year==calendar.year}"
                 @click="selectYear(year)">
                <a href="javascript:void(0)">{{year}}</a>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      viewMode: 0,
      calendar: new Calendar(new Date()),
      monthArr: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
      weekdayArr: ['日', '一', '二', '三', '四', '五', '六']
    }
  },
  methods: {
    showYear () {
      this.viewMode = 2
    },
    showMonth () {
      this.viewMode = 1
    },
    showDate () {
      this.viewMode = 0
    },
    selectYear (year) {
      this.calendar.year = year
      this.viewMode = 1
    },
    selectMonth (month) {
      this.calendar.month = month
      this.viewMode = 0
    },
    selectDate (date) {
      this.calendar.date = date
    },
    dateInRange (day) {
      if (!day) {
        return true
      }
      return true
    },
    isToday (day) {
      return day === this.calendar.date
    }
  }
}

class Calendar {
  constructor (date) {
    this.years = []
    this.months = Array.from(Array(12), (v, i) => i)
    this.days = []
    this.dateMap = new Map()
    this.currentDate = date || new Date()
  }

  get currentDate () {
    return new Date(this._year, this._month, this._date)
  }

  set currentDate (val) {
    if (val) {
      this.year = val.getFullYear()
      this.month = val.getMonth()
      this.date = val.getDate()
    }
  }

  get year () {
    return this._year
  }

  set year (val) {
    if ((typeof val === 'number') && (val > 0)) {
      this._year = val

      let startIndex = Math.floor(val / 10) * 10 + 1
      this.years = Array.from(Array(10), (v, k) => k + startIndex)
    }
  }

  get month () {
    return this._month
  }

  set month (val) {
    if (typeof val === 'number') {
      this._month = val

      let offset = new Date(new Date(this._year, val, 1).valueOf()).getDay()
      let lastDay = new Date(new Date(this._year, val + 1, 1).valueOf() - 1)

      this.days = []

      for (let day = offset; day < lastDay.getDate() + offset; day++) {
        if (!this.days[Math.floor(day / 7)]) {
          this.days[Math.floor(day / 7)] = [0, 0, 0, 0, 0, 0, 0]
        }

        this.days[Math.floor(day / 7)][day % 7] = day - offset
      }
    }
  }

  get date () {
    return this._date
  }

  set date (val) {
    if (typeof val === 'number') {
      this._date = val
    }
  }

  previousAge () {
    this.year -= 10
  }

  nextAge () {
    this.year += 10
  }

  previousYear () {
    this.year--
    this.month = this.month
  }

  nextYear () {
    this.year++
    this.month = this.month
  }

  previousMonth () {
    if (this.month === 0) {
      this.month = 11
      this.year--
    } else {
      this.month--
    }
  }

  nextMonth () {
    if (this.month === 11) {
      this.month = 0
      this.year++
    } else {
      this.month++
    }
  }
}
</script>

<style scoped>
.calendar {
    border: 1px #eeeeee solid;
    background-color: #ffffff;
    font-family: Roboto,sans-serif;
}

.header {
    padding-bottom: 1rem;
    color: #fff;
    text-align: center;
    background-color: #3f51b5;
}

.header .weekday {
    flex: 1;
    font-size: 1.4rem;
    line-height: 2rem;
    background-color: #303f9f;
}

.header .month {
    width: 100%;
    padding: 1rem;
    font-size: 1.8rem;
    text-transform: uppercase;
    cursor: pointer;
}

.header .date {
    width: 100%;
    font-size: 5rem;
    line-height: 4rem;
    cursor: pointer;
}

.header .year {
    display: inline-block;
    margin-top: 1rem;
    font-size: 1.8rem;
    cursor: pointer;
    opacity: 0.6;
}

a,
span {
    display: block;
    text-align: center;
    text-decoration: none;
    color: #2086bf;
}

a:hover {
    background-color: #75c7ee;
    color: #ffffff;
}

.calendar-row {
    margin: 0 0 .1rem;
    display: flex;
}

.prev,
.next,
.year,
.month,
.day,
.date {
    flex: 1;
}

.date-title {
    flex: 3
}

.calendar-row a,
.calendar-row span {
    line-height: 3rem;
    border-radius: 50%;
    color: #757575;
    text-align: center;
}

.calendar-header a,
.calendar-header span {
    opacity: .7;
    border-radius: 0;
    font-weight: 500;
}

.day span {
    font-weight: 800;
    border: 1px transparent solid;
}

.active a {
    background-color: #60a917;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
    color: #ffffff;
}

.disabled a,
.disabled a:hover {
    color: #999999;
    background-color: #eeeeee;
    cursor: not-allowed;
}
</style>
