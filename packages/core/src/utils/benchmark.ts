export function benchmark(runners: Runner[], times = 1, round = 1) {
  for (const runner of runners) {
    for (let r = 1; r <= round; r++) {
      console.time(`${runner.label} ran ${times} time(s)`)
      for (let i = 0; i < times; i++) {
        runner.run()
      }
      console.timeEnd(`${runner.label} ran ${times} time(s)`)
    }
    console.log('')
  }
}
interface Runner {
  label: string
  run: CallableFunction
}
