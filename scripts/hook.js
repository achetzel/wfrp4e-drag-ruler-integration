
Hooks.once("dragRuler.ready", (SpeedProvider) => {
    class Wfrp4eSpeedProvider extends SpeedProvider {
        get colors() {
            return [
                {id: "walk", default: 0x009933, name: "wfrp4e.speeds.walk"},
                {id: "run", default: 0xFFCC00, name: "wfrp4e.speeds.run"},
            ]
        }

        getRanges(token) {
            const baseSpeed = token.actor.data.data.details.move.walk
            const runSpeed = token.actor.data.data.details.move.run

            // Characters walk up to agi*2 unless thats modified, and sprint with agi*4, so lets just take the final value
            const ranges = [
                {range: baseSpeed, color: "walk"},
                {range: runSpeed, color: "run"}
            ]

            return ranges
        }
    }
    dragRuler.registerModule("wfrp4e-drag-ruler-integration", Wfrp4eSpeedProvider)
})