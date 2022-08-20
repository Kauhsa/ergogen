// Raspberry Pico 2040

module.exports = {
    nets: {
      '3V3_EN': '3V3_EN',
      '3V3': '3V3',
      ADC_VREF: 'ADC_VREF',
      AGND: 'AGND',
      GND: 'GND',
      GP0: 'GP0',
      GP1: 'GP1',
      GP2: 'GP2',
      GP3: 'GP3',
      GP4: 'GP4',
      GP5: 'GP5',
      GP6: 'GP6',
      GP7: 'GP7',
      GP8: 'GP8',
      GP9: 'GP9',
      GP10: 'GP10',
      GP11: 'GP11',
      GP12: 'GP12',
      GP13: 'GP13',
      GP14: 'GP14',
      GP15: 'GP15',
      GP16: 'GP16',
      GP17: 'GP17',
      GP18: 'GP18',
      GP19: 'GP19',
      GP20: 'GP20',
      GP21: 'GP21',
      GP22: 'GP22',
      GP26: 'GP26',
      GP27: 'GP27',
      GP28: 'GP28',
      RUN: 'RUN',
      SWCLK: 'SWCLK',
      SWDIO: 'SWDIO',
      VBUS: 'VBUS',
      VSYS: 'VSYS',
    },
    params: {
      class: 'MCU',
      orientation: 'down'
    },
    body: p => {
      return `
        (module "RPi_Pico_SMD_TH" (layer F.Cu) (tedit 6224DF39)
          ${p.at /* parametric position */}
          (attr through_hole)
          (fp_text reference "${p.ref}" (at 0 0 180) (layer "F.SilkS")
            ${p.ref_hide}
            (effects (font (size 1 1) (thickness 0.15)))
            (tstamp 83184391-76ed-44f0-8cd0-01f89f157bdb)
          )
          (fp_text value "RPi_Pico_SMD_TH" (at 0 2.159) (layer "F.SilkS")
            (effects (font (size 1 1) (thickness 0.15)))
            (tstamp 46cbe85d-ff47-428e-b187-4ebd50a66e0c)
          )
          (fp_text user "GP11" (at -13.2 11.43 45) (layer "F.SilkS")
            (effects (font (size 0.8 0.8) (thickness 0.15)))
            (tstamp 000b46d6-b833-4804-8f56-56d539f76d09)
          )
          (fp_text user "AGND" (at 13.054 -6.35 45) (layer "F.SilkS")
            (effects (font (size 0.8 0.8) (thickness 0.15)))
            (tstamp 08ec951f-e7eb-41cf-9589-697107a98e88)
          )
          (fp_text user "GND" (at 12.8 19.05 45) (layer "F.SilkS")
            (effects (font (size 0.8 0.8) (thickness 0.15)))
            (tstamp 09bbea88-8bd7-48ec-baae-1b4a9a11a40e)
          )
          (fp_text user "VBUS" (at 13.3 -24.2 45) (layer "F.SilkS")
            (effects (font (size 0.8 0.8) (thickness 0.15)))
            (tstamp 0f0f7bb5-ade7-4a81-82b4-43be6a8ad05c)
          )
          (fp_text user "GND" (at 12.8 -19.05 45) (layer "F.SilkS")
            (effects (font (size 0.8 0.8) (thickness 0.15)))
            (tstamp 0fb27e11-fde6-4a25-adbb-e9684771b369)
          )
          (fp_text user "GP13" (at -13.054 16.51 45) (layer "F.SilkS")
            (effects (font (size 0.8 0.8) (thickness 0.15)))
            (tstamp 113ffcdf-4c54-4e37-81dc-f91efa934ba7)
          )
          (fp_text user "ADC_VREF" (at 14 -12.5 45) (layer "F.SilkS")
            (effects (font (size 0.8 0.8) (thickness 0.15)))
            (tstamp 162e5bdd-61a8-46a3-8485-826b5d58e1a1)
          )
          (fp_text user "GP4" (at -12.8 -11.43 45) (layer "F.SilkS")
            (effects (font (size 0.8 0.8) (thickness 0.15)))
            (tstamp 1cacb878-9da4-41fc-aa80-018bc841e19a)
          )
          (fp_text user "GP7" (at -12.7 -1.3 45) (layer "F.SilkS")
            (effects (font (size 0.8 0.8) (thickness 0.15)))
            (tstamp 1de61170-5337-44c5-ba28-bd477db4bff1)
          )
          (fp_text user "GP15" (at -13.054 24.13 45) (layer "F.SilkS")
            (effects (font (size 0.8 0.8) (thickness 0.15)))
            (tstamp 2102c637-9f11-48f1-aae6-b4139dc22be2)
          )
          (fp_text user "GP17" (at 13.054 21.59 45) (layer "F.SilkS")
            (effects (font (size 0.8 0.8) (thickness 0.15)))
            (tstamp 272c2a78-b5f5-4b61-aed3-ec69e0e92729)
          )
          (fp_text user "GP26" (at 13.054 -1.27 45) (layer "F.SilkS")
            (effects (font (size 0.8 0.8) (thickness 0.15)))
            (tstamp 2b25e886-ded1-450a-ada1-ece4208052e4)
          )
          (fp_text user "SWCLK" (at -5.7 26.2) (layer "F.SilkS")
            (effects (font (size 0.8 0.8) (thickness 0.15)))
            (tstamp 2eea20e6-112c-411a-b615-885ae773135a)
          )
          (fp_text user "3V3_EN" (at 13.7 -17.2 45) (layer "F.SilkS")
            (effects (font (size 0.8 0.8) (thickness 0.15)))
            (tstamp 2f3fba7a-cf45-4bd8-9035-07e6fa0b4732)
          )
          (fp_text user "3V3" (at 12.9 -13.9 45) (layer "F.SilkS")
            (effects (font (size 0.8 0.8) (thickness 0.15)))
            (tstamp 319c683d-aed6-4e7d-aee2-ff9871746d52)
          )
          (fp_text user "GP8" (at -12.8 1.27 45) (layer "F.SilkS")
            (effects (font (size 0.8 0.8) (thickness 0.15)))
            (tstamp 3a1a39fc-8030-4c93-9d9c-d79ba6824099)
          )
          (fp_text user "GP16" (at 13.054 24.13 45) (layer "F.SilkS")
            (effects (font (size 0.8 0.8) (thickness 0.15)))
            (tstamp 3f2a6679-91d7-4b6c-bf5c-c4d5abb2bc44)
          )
          (fp_text user "GND" (at 12.8 6.35 45) (layer "F.SilkS")
            (effects (font (size 0.8 0.8) (thickness 0.15)))
            (tstamp 41c18011-40db-4384-9ba4-c0158d0d9d6a)
          )
          (fp_text user "GND" (at -12.8 -6.35 45) (layer "F.SilkS")
            (effects (font (size 0.8 0.8) (thickness 0.15)))
            (tstamp 4346fe55-f906-453a-b81a-1c013104a598)
          )
          (fp_text user "GP28" (at 13.054 -9.144 45) (layer "F.SilkS")
            (effects (font (size 0.8 0.8) (thickness 0.15)))
            (tstamp 456c5e47-d71e-4708-b061-1e61634d8648)
          )
          (fp_text user "GP9" (at -12.8 3.81 45) (layer "F.SilkS")
            (effects (font (size 0.8 0.8) (thickness 0.15)))
            (tstamp 49b5f540-e128-4e08-bb09-f321f8e64056)
          )
          (fp_text user "SWDIO" (at 5.6 26.2) (layer "F.SilkS")
            (effects (font (size 0.8 0.8) (thickness 0.15)))
            (tstamp 49fec31e-3712-4229-8142-b191d90a97d0)
          )
          (fp_text user "GP5" (at -12.8 -8.89 45) (layer "F.SilkS")
            (effects (font (size 0.8 0.8) (thickness 0.15)))
            (tstamp 4ce9470f-5633-41bf-89ac-74a810939893)
          )
          (fp_text user "GP0" (at -12.8 -24.13 45) (layer "F.SilkS")
            (effects (font (size 0.8 0.8) (thickness 0.15)))
            (tstamp 51cc007a-3378-4ce3-909c-71e94822f8d1)
          )
          (fp_text user "GP3" (at -12.8 -13.97 45) (layer "F.SilkS")
            (effects (font (size 0.8 0.8) (thickness 0.15)))
            (tstamp 5576cd03-3bad-40c5-9316-1d286895d52a)
          )
          (fp_text user "GND" (at -12.8 19.05 45) (layer "F.SilkS")
            (effects (font (size 0.8 0.8) (thickness 0.15)))
            (tstamp 56d2bc5d-fd72-4542-ab0f-053a5fd60efa)
          )
          (fp_text user "GND" (at -12.8 -19.05 45) (layer "F.SilkS")
            (effects (font (size 0.8 0.8) (thickness 0.15)))
            (tstamp 5e6153e6-2c19-46de-9a8e-b310a2a07861)
          )
          (fp_text user "GP20" (at 13.054 11.43 45) (layer "F.SilkS")
            (effects (font (size 0.8 0.8) (thickness 0.15)))
            (tstamp 62f15a9a-9893-486e-9ad0-ea43f88fc9e7)
          )
          (fp_text user "GP19" (at 13.054 13.97 45) (layer "F.SilkS")
            (effects (font (size 0.8 0.8) (thickness 0.15)))
            (tstamp 7273dd21-e834-41d3-b279-d7de727709ca)
          )
          (fp_text user "GP2" (at -12.9 -16.51 45) (layer "F.SilkS")
            (effects (font (size 0.8 0.8) (thickness 0.15)))
            (tstamp 96ef76a5-90c3-4767-98ba-2b61887e28d3)
          )
          (fp_text user "GP18" (at 13.054 16.51 45) (layer "F.SilkS")
            (effects (font (size 0.8 0.8) (thickness 0.15)))
            (tstamp a3fab380-991d-404b-95d5-1c209b047b6e)
          )
          (fp_text user "GP6" (at -12.8 -3.81 45) (layer "F.SilkS")
            (effects (font (size 0.8 0.8) (thickness 0.15)))
            (tstamp aa23bfe3-454b-4a2b-bfe1-101c747eb84e)
          )
          (fp_text user "GP21" (at 13.054 8.9 45) (layer "F.SilkS")
            (effects (font (size 0.8 0.8) (thickness 0.15)))
            (tstamp b2b363dd-8e47-4a76-a142-e00e28334875)
          )
          (fp_text user "GP22" (at 13.054 3.81 45) (layer "F.SilkS")
            (effects (font (size 0.8 0.8) (thickness 0.15)))
            (tstamp c15b2f75-2e10-4b71-bebb-e2b872171b92)
          )
          (fp_text user "GND" (at -12.8 6.35 45) (layer "F.SilkS")
            (effects (font (size 0.8 0.8) (thickness 0.15)))
            (tstamp c512fed3-9770-476b-b048-e781b4f3cd72)
          )
          (fp_text user "GP14" (at -13.1 21.59 45) (layer "F.SilkS")
            (effects (font (size 0.8 0.8) (thickness 0.15)))
            (tstamp c7cd39db-931a-4d86-96b8-57e6b39f58f9)
          )
          (fp_text user "VSYS" (at 13.2 -21.59 45) (layer "F.SilkS")
            (effects (font (size 0.8 0.8) (thickness 0.15)))
            (tstamp cb1a49ef-0a06-4f40-9008-61d1d1c36198)
          )
          (fp_text user "GP12" (at -13.2 13.97 45) (layer "F.SilkS")
            (effects (font (size 0.8 0.8) (thickness 0.15)))
            (tstamp ceb12634-32ca-4cbf-9ff5-5e8b53ab18ad)
          )
          (fp_text user "GP1" (at -12.9 -21.6 45) (layer "F.SilkS")
            (effects (font (size 0.8 0.8) (thickness 0.15)))
            (tstamp db6412d3-e6c3-4bdd-abf4-a8f55d56df31)
          )
          (fp_text user "GP10" (at -13.054 8.89 45) (layer "F.SilkS")
            (effects (font (size 0.8 0.8) (thickness 0.15)))
            (tstamp dd70858b-2f9a-4b3f-9af5-ead3a9ba57e9)
          )
          (fp_text user "RUN" (at 13 1.27 45) (layer "F.SilkS")
            (effects (font (size 0.8 0.8) (thickness 0.15)))
            (tstamp f6a5c856-f2b5-40eb-a958-b666a0d408a0)
          )
          (fp_text user "GP27" (at 13.054 -3.8 45) (layer "F.SilkS")
            (effects (font (size 0.8 0.8) (thickness 0.15)))
            (tstamp ffa442c7-cbef-461f-8613-c211201cec06)
          )

          (fp_line (start 10.5 4.9) (end 10.5 5.3) (layer "F.SilkS") (width 0.12) (tstamp 099473f1-6598-46ff-a50f-4c520832170d))
          (fp_line (start -10.5 -23.1) (end -10.5 -22.7) (layer "F.SilkS") (width 0.12) (tstamp 0c5dddf1-38df-43d2-b49c-e7b691dab0ab))
          (fp_line (start -10.5 -20.5) (end -10.5 -20.1) (layer "F.SilkS") (width 0.12) (tstamp 0ce1dd44-f307-4f98-9f0d-478fd87daa64))
          (fp_line (start 10.5 10) (end 10.5 10.4) (layer "F.SilkS") (width 0.12) (tstamp 15699041-ed40-45ee-87d8-f5e206a88536))
          (fp_line (start -3.7 25.5) (end -10.5 25.5) (layer "F.SilkS") (width 0.12) (tstamp 1855ca44-ab48-4b76-a210-97fc81d916c4))
          (fp_line (start 10.5 -0.2) (end 10.5 0.2) (layer "F.SilkS") (width 0.12) (tstamp 1876c30c-72b2-4a8d-9f32-bf8b213530b4))
          (fp_line (start 10.5 22.7) (end 10.5 23.1) (layer "F.SilkS") (width 0.12) (tstamp 199124ca-dd64-45cf-a063-97cc545cbea7))
          (fp_line (start 10.5 -23.1) (end 10.5 -22.7) (layer "F.SilkS") (width 0.12) (tstamp 1bd80cf9-f42a-4aee-a408-9dbf4e81e625))
          (fp_line (start -7.493 -22.833) (end -7.493 -25.5) (layer "F.SilkS") (width 0.12) (tstamp 254f7cc6-cee1-44ca-9afe-939b318201aa))
          (fp_line (start 10.5 -5.3) (end 10.5 -4.9) (layer "F.SilkS") (width 0.12) (tstamp 26a22c19-4cc5-4237-9651-0edc4f854154))
          (fp_line (start -10.5 -25.5) (end 10.5 -25.5) (layer "F.SilkS") (width 0.12) (tstamp 3457afc5-3e4f-4220-81d1-b079f653a722))
          (fp_line (start -10.5 20.1) (end -10.5 20.5) (layer "F.SilkS") (width 0.12) (tstamp 3b65c51e-c243-447e-bee9-832d94c1630e))
          (fp_line (start -10.5 -2.7) (end -10.5 -2.3) (layer "F.SilkS") (width 0.12) (tstamp 3bbbbb7d-391c-4fee-ac81-3c47878edc38))
          (fp_line (start -10.5 22.7) (end -10.5 23.1) (layer "F.SilkS") (width 0.12) (tstamp 402c62e6-8d8e-473a-a0cf-2b86e4908cd7))
          (fp_line (start -10.5 -15.4) (end -10.5 -15) (layer "F.SilkS") (width 0.12) (tstamp 4970ec6e-3725-4619-b57d-dc2c2cb86ed0))
          (fp_line (start -10.5 -5.3) (end -10.5 -4.9) (layer "F.SilkS") (width 0.12) (tstamp 4a53fa56-d65b-42a4-a4be-8f49c4c015bb))
          (fp_line (start 10.5 -2.7) (end 10.5 -2.3) (layer "F.SilkS") (width 0.12) (tstamp 4bbde53d-6894-4e18-9480-84a6a26d5f6b))
          (fp_line (start 10.5 25.5) (end 3.7 25.5) (layer "F.SilkS") (width 0.12) (tstamp 54ed3ee1-891b-418e-ab9c-6a18747d7388))
          (fp_line (start 10.5 -15.4) (end 10.5 -15) (layer "F.SilkS") (width 0.12) (tstamp 57f248a7-365e-4c42-b80d-5a7d1f9dfaf3))
          (fp_line (start -10.5 7.4) (end -10.5 7.8) (layer "F.SilkS") (width 0.12) (tstamp 5bab6a37-1fdf-4cf8-b571-44c962ed86e9))
          (fp_line (start -10.5 -22.833) (end -7.493 -22.833) (layer "F.SilkS") (width 0.12) (tstamp 5f48b0f2-82cf-40ce-afac-440f97643c36))
          (fp_line (start -10.5 -7.8) (end -10.5 -7.4) (layer "F.SilkS") (width 0.12) (tstamp 6150c02b-beb5-4af1-951e-3666a285a6ea))
          (fp_line (start -10.5 4.9) (end -10.5 5.3) (layer "F.SilkS") (width 0.12) (tstamp 706c1cb9-5d96-4282-9efc-6147f0125147))
          (fp_line (start -1.5 25.5) (end -1.1 25.5) (layer "F.SilkS") (width 0.12) (tstamp 749d9ed0-2ff2-4b55-abc5-f7231ec3aa28))
          (fp_line (start -10.5 -12.9) (end -10.5 -12.5) (layer "F.SilkS") (width 0.12) (tstamp 755f94aa-38f0-4a64-a7c7-6c71cb18cddf))
          (fp_line (start 10.5 -20.5) (end 10.5 -20.1) (layer "F.SilkS") (width 0.12) (tstamp 80095e91-6317-4cfb-9aea-884c9a1accc5))
          (fp_line (start -10.5 15.1) (end -10.5 15.5) (layer "F.SilkS") (width 0.12) (tstamp 88deea08-baa5-4041-beb7-01c299cf00e6))
          (fp_line (start 1.1 25.5) (end 1.5 25.5) (layer "F.SilkS") (width 0.12) (tstamp 8a8c373f-9bc3-4cf7-8f41-4802da916698))
          (fp_line (start 10.5 -12.9) (end 10.5 -12.5) (layer "F.SilkS") (width 0.12) (tstamp 9112ddd5-10d5-48b8-954f-f1d5adcacbd9))
          (fp_line (start -10.5 10) (end -10.5 10.4) (layer "F.SilkS") (width 0.12) (tstamp 92f063a3-7cce-4a96-8a3a-cf5767f700c6))
          (fp_line (start 10.5 2.3) (end 10.5 2.7) (layer "F.SilkS") (width 0.12) (tstamp 968a6172-7a4e-40ab-a78a-e4d03671e136))
          (fp_line (start -10.5 -10.4) (end -10.5 -10) (layer "F.SilkS") (width 0.12) (tstamp 9c2999b2-1cf1-4204-9d23-243401b77aa3))
          (fp_line (start -10.5 -0.2) (end -10.5 0.2) (layer "F.SilkS") (width 0.12) (tstamp 9ed09117-33cf-45a3-85a7-2606522feaf8))
          (fp_line (start -10.5 17.6) (end -10.5 18) (layer "F.SilkS") (width 0.12) (tstamp a177c3b4-b04c-490e-b3fe-d3d4d7aa24a7))
          (fp_line (start -10.5 12.5) (end -10.5 12.9) (layer "F.SilkS") (width 0.12) (tstamp ad4d05f5-6957-42f8-b65c-c657b9a26485))
          (fp_line (start 10.5 7.4) (end 10.5 7.8) (layer "F.SilkS") (width 0.12) (tstamp af76ce95-feca-41fb-bf31-edaa26d6766a))
          (fp_line (start 10.5 -10.4) (end 10.5 -10) (layer "F.SilkS") (width 0.12) (tstamp c1b11207-7c0a-49b3-a41d-2fe677d5f3b8))
          (fp_line (start 10.5 17.6) (end 10.5 18) (layer "F.SilkS") (width 0.12) (tstamp c346b00c-b5e0-4939-beb4-7f48172ef334))
          (fp_line (start 10.5 -7.8) (end 10.5 -7.4) (layer "F.SilkS") (width 0.12) (tstamp c3d5daf8-d359-42b2-a7c2-0d080ba7e212))
          (fp_line (start -10.5 -25.5) (end -10.5 -25.2) (layer "F.SilkS") (width 0.12) (tstamp ca56e1ad-54bf-4df5-a4f7-99f5d61d0de9))
          (fp_line (start 10.5 20.1) (end 10.5 20.5) (layer "F.SilkS") (width 0.12) (tstamp ca9b74ce-0dee-401c-9544-f599f4cf538d))
          (fp_line (start 10.5 12.5) (end 10.5 12.9) (layer "F.SilkS") (width 0.12) (tstamp d3dd7cdb-b730-487d-804d-99150ba318ef))
          (fp_line (start 10.5 -18) (end 10.5 -17.6) (layer "F.SilkS") (width 0.12) (tstamp e11ae5a5-aa10-4f10-b346-f16e33c7899a))
          (fp_line (start -10.5 2.3) (end -10.5 2.7) (layer "F.SilkS") (width 0.12) (tstamp eb391a95-1c1d-4613-b508-c76b8bc13a73))
          (fp_line (start 10.5 -25.5) (end 10.5 -25.2) (layer "F.SilkS") (width 0.12) (tstamp f23ac723-a36d-491d-9473-7ec0ffed332d))
          (fp_line (start -10.5 -18) (end -10.5 -17.6) (layer "F.SilkS") (width 0.12) (tstamp f8b47531-6c06-4e54-9fc9-cd9d0f3dd69f))
          (fp_line (start 10.5 15.1) (end 10.5 15.5) (layer "F.SilkS") (width 0.12) (tstamp fd60415a-f01a-46c5-9369-ea970e435e5b))
          (fp_poly (pts
              (xy -1.5 -16.5)
              (xy -3.5 -16.5)
              (xy -3.5 -18.5)
              (xy -1.5 -18.5)
            ) (layer "Dwgs.User") (width 0.1) (fill solid) (tstamp 022502e0-e724-4b75-bc35-3c5984dbeb76))
          (fp_poly (pts
              (xy -1.5 -11.5)
              (xy -3.5 -11.5)
              (xy -3.5 -13.5)
              (xy -1.5 -13.5)
            ) (layer "Dwgs.User") (width 0.1) (fill solid) (tstamp 9f969b13-1795-4747-8326-93bdc304ed56))
          (fp_poly (pts
              (xy 3.7 -20.2)
              (xy -3.7 -20.2)
              (xy -3.7 -24.9)
              (xy 3.7 -24.9)
            ) (layer "Dwgs.User") (width 0.1) (fill solid) (tstamp b9d4de74-d246-495d-8b63-12ab2133d6d6))
          (fp_poly (pts
              (xy -1.5 -14)
              (xy -3.5 -14)
              (xy -3.5 -16)
              (xy -1.5 -16)
            ) (layer "Dwgs.User") (width 0.1) (fill solid) (tstamp d655bb0a-cbf9-4908-ad60-7024ff468fbd))
          (fp_line (start 11 -26) (end 11 26) (layer "F.CrtYd") (width 0.12) (tstamp 58390862-1833-41dd-9c4e-98073ea0da33))
          (fp_line (start 11 26) (end -11 26) (layer "F.CrtYd") (width 0.12) (tstamp 5e755161-24a5-4650-a6e3-9836bf074412))
          (fp_line (start -11 -26) (end 11 -26) (layer "F.CrtYd") (width 0.12) (tstamp 9208ea78-8dde-4b3d-91e9-5755ab5efd9a))
          (fp_line (start -11 26) (end -11 -26) (layer "F.CrtYd") (width 0.12) (tstamp e86e4fae-9ca7-4857-a93c-bc6a3048f887))
          (fp_line (start -10.5 -24.2) (end -9.2 -25.5) (layer "F.Fab") (width 0.12) (tstamp 1bf7d0f9-0dcf-4d7c-b58c-318e3dc42bc9))
          (fp_line (start 10.5 -25.5) (end 10.5 25.5) (layer "F.Fab") (width 0.12) (tstamp 247ebffd-2cb6-4379-ba6e-21861fea3913))
          (fp_line (start 10.5 25.5) (end -10.5 25.5) (layer "F.Fab") (width 0.12) (tstamp 94d24676-7ae3-483c-8bd6-88d31adf00b4))
          (fp_line (start -10.5 -25.5) (end 10.5 -25.5) (layer "F.Fab") (width 0.12) (tstamp 966ee9ec-860e-45bb-af89-30bda72b2032))
          (fp_line (start -10.5 25.5) (end -10.5 -25.5) (layer "F.Fab") (width 0.12) (tstamp e45aa7d8-0254-4176-afd9-766820762e19))
          (pad "" np_thru_hole oval (at 2.725 -24) (size 1.8 1.8) (drill 1.8) (layers *.Cu *.Mask) (tstamp 631c7be5-8dc2-4df4-ab73-737bb928e763))
          (pad "" np_thru_hole oval (at -2.725 -24) (size 1.8 1.8) (drill 1.8) (layers *.Cu *.Mask) (tstamp 6d2a06fb-0b1e-452a-ab38-11a5f45e1b32))
          (pad "" np_thru_hole oval (at -2.425 -20.97) (size 1.5 1.5) (drill 1.5) (layers *.Cu *.Mask) (tstamp 929a9b03-e99e-4b88-8e16-759f8c6b59a5))
          (pad "" np_thru_hole oval (at 2.425 -20.97) (size 1.5 1.5) (drill 1.5) (layers *.Cu *.Mask) (tstamp c210293b-1d7a-4e96-92e9-058784106727))
          
          (pad "1" thru_hole oval (at -8.89 -24.13) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask) ${p.net.GP0.str})
          (pad "2" thru_hole oval (at -8.89 -21.59) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask) ${p.net.GP1.str})
          (pad "3" thru_hole rect (at -8.89 -19.05) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask) ${p.net.GND.str})
          (pad "4" thru_hole oval (at -8.89 -16.51) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask) ${p.net.GP2.str})
          (pad "5" thru_hole oval (at -8.89 -13.97) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask) ${p.net.GP3.str})
          (pad "6" thru_hole oval (at -8.89 -11.43) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask) ${p.net.GP4.str})
          (pad "7" thru_hole oval (at -8.89 -8.89) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask) ${p.net.GP5.str})
          (pad "8" thru_hole rect (at -8.89 -6.35) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask) ${p.net.GND.str})
          (pad "9" thru_hole oval (at -8.89 -3.81) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask) ${p.net.GP6.str})
          (pad "10" thru_hole oval (at -8.89 -1.27) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask) ${p.net.GP7.str})
          (pad "11" thru_hole oval (at -8.89 1.27) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask) ${p.net.GP8.str})
          (pad "12" thru_hole oval (at -8.89 3.81) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask) ${p.net.GP9.str})
          (pad "13" thru_hole rect (at -8.89 6.35) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask) ${p.net.GND.str})
          (pad "14" thru_hole oval (at -8.89 8.89) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask) ${p.net.GP10.str})
          (pad "15" thru_hole oval (at -8.89 11.43) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask) ${p.net.GP11.str})
          (pad "16" thru_hole oval (at -8.89 13.97) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask) ${p.net.GP12.str})
          (pad "17" thru_hole oval (at -8.89 16.51) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask) ${p.net.GP13.str})
          (pad "18" thru_hole rect (at -8.89 19.05) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask) ${p.net.GND.str})
          (pad "19" thru_hole oval (at -8.89 21.59) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask) ${p.net.GP14.str})
          (pad "20" thru_hole oval (at -8.89 24.13) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask) ${p.net.GP15.str})
          (pad "21" thru_hole oval (at 8.89 24.13) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask) ${p.net.GP16.str})
          (pad "22" thru_hole oval (at 8.89 21.59) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask) ${p.net.GP17.str})
          (pad "23" thru_hole rect (at 8.89 19.05) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask) ${p.net.GND.str})
          (pad "24" thru_hole oval (at 8.89 16.51) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask) ${p.net.GP18.str})
          (pad "25" thru_hole oval (at 8.89 13.97) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask) ${p.net.GP19.str})
          (pad "26" thru_hole oval (at 8.89 11.43) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask) ${p.net.GP20.str})
          (pad "27" thru_hole oval (at 8.89 8.89) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask) ${p.net.GP21.str})
          (pad "28" thru_hole rect (at 8.89 6.35) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask) ${p.net.GND.str})
          (pad "29" thru_hole oval (at 8.89 3.81) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask) ${p.net.GP22.str})
          (pad "30" thru_hole oval (at 8.89 1.27) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask) ${p.net.RUN.str})
          (pad "31" thru_hole oval (at 8.89 -1.27) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask) ${p.net.GP26.str})
          (pad "32" thru_hole oval (at 8.89 -3.81) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask) ${p.net.GP27.str})
          (pad "33" thru_hole rect (at 8.89 -6.35) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask) ${p.net.AGND.str})
          (pad "34" thru_hole oval (at 8.89 -8.89) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask) ${p.net.GP28.str})
          (pad "35" thru_hole oval (at 8.89 -11.43) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask) ${p.net.ADC_VREF.str})
          (pad "36" thru_hole oval (at 8.89 -13.97) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask) ${p.net['3V3'].str})
          (pad "37" thru_hole oval (at 8.89 -16.51) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask) ${p.net['3V3_EN'].str})
          (pad "38" thru_hole rect (at 8.89 -19.05) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask) ${p.net.GND.str})
          (pad "39" thru_hole oval (at 8.89 -21.59) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask) ${p.net.VSYS.str})
          (pad "40" thru_hole oval (at 8.89 -24.13) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask) ${p.net.VBUS.str})
          (pad "41" thru_hole oval (at -2.54 23.9) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask) ${p.net.SWCLK.str})
          (pad "42" thru_hole rect (at 0 23.9) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask) ${p.net.GND.str})
          (pad "43" thru_hole oval (at 2.54 23.9) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask) ${p.net.SWDIO.str})

          ${p.param.smd ? `
            (pad "1" smd rect (at -8.89 -24.13) (size 3.5 1.7) (drill (offset -0.9 0)) (layers "F.Cu" "F.Mask") ${p.net.GP0.str})
            (pad "2" smd rect (at -8.89 -21.59) (size 3.5 1.7) (drill (offset -0.9 0)) (layers "F.Cu" "F.Mask") ${p.net.GP1.str})
            (pad "3" smd rect (at -8.89 -19.05) (size 3.5 1.7) (drill (offset -0.9 0)) (layers "F.Cu" "F.Mask") ${p.net.GND.str})
            (pad "4" smd rect (at -8.89 -16.51) (size 3.5 1.7) (drill (offset -0.9 0)) (layers "F.Cu" "F.Mask") ${p.net.GP2.str})
            (pad "5" smd rect (at -8.89 -13.97) (size 3.5 1.7) (drill (offset -0.9 0)) (layers "F.Cu" "F.Mask") ${p.net.GP3.str})
            (pad "6" smd rect (at -8.89 -11.43) (size 3.5 1.7) (drill (offset -0.9 0)) (layers "F.Cu" "F.Mask") ${p.net.GP4.str})
            (pad "7" smd rect (at -8.89 -8.89) (size 3.5 1.7) (drill (offset -0.9 0)) (layers "F.Cu" "F.Mask") ${p.net.GP5.str})
            (pad "8" smd rect (at -8.89 -6.35) (size 3.5 1.7) (drill (offset -0.9 0)) (layers "F.Cu" "F.Mask") ${p.net.GND.str})
            (pad "9" smd rect (at -8.89 -3.81) (size 3.5 1.7) (drill (offset -0.9 0)) (layers "F.Cu" "F.Mask") ${p.net.GP6.str})
            (pad "10" smd rect (at -8.89 -1.27) (size 3.5 1.7) (drill (offset -0.9 0)) (layers "F.Cu" "F.Mask") ${p.net.GP7.str})
            (pad "11" smd rect (at -8.89 1.27) (size 3.5 1.7) (drill (offset -0.9 0)) (layers "F.Cu" "F.Mask") ${p.net.GP8.str})
            (pad "12" smd rect (at -8.89 3.81) (size 3.5 1.7) (drill (offset -0.9 0)) (layers "F.Cu" "F.Mask") ${p.net.GP9.str})
            (pad "13" smd rect (at -8.89 6.35) (size 3.5 1.7) (drill (offset -0.9 0)) (layers "F.Cu" "F.Mask") ${p.net.GND.str})
            (pad "14" smd rect (at -8.89 8.89) (size 3.5 1.7) (drill (offset -0.9 0)) (layers "F.Cu" "F.Mask") ${p.net.GP10.str})
            (pad "15" smd rect (at -8.89 11.43) (size 3.5 1.7) (drill (offset -0.9 0)) (layers "F.Cu" "F.Mask") ${p.net.GP11.str})
            (pad "16" smd rect (at -8.89 13.97) (size 3.5 1.7) (drill (offset -0.9 0)) (layers "F.Cu" "F.Mask") ${p.net.GP12.str})
            (pad "17" smd rect (at -8.89 16.51) (size 3.5 1.7) (drill (offset -0.9 0)) (layers "F.Cu" "F.Mask") ${p.net.GP13.str})
            (pad "18" smd rect (at -8.89 19.05) (size 3.5 1.7) (drill (offset -0.9 0)) (layers "F.Cu" "F.Mask") ${p.net.GND.str})
            (pad "19" smd rect (at -8.89 21.59) (size 3.5 1.7) (drill (offset -0.9 0)) (layers "F.Cu" "F.Mask") ${p.net.GP14.str})
            (pad "20" smd rect (at -8.89 24.13) (size 3.5 1.7) (drill (offset -0.9 0)) (layers "F.Cu" "F.Mask") ${p.net.GP15.str})
            (pad "21" smd rect (at 8.89 24.13) (size 3.5 1.7) (drill (offset 0.9 0)) (layers "F.Cu" "F.Mask") ${p.net.GP16.str})
            (pad "22" smd rect (at 8.89 21.59) (size 3.5 1.7) (drill (offset 0.9 0)) (layers "F.Cu" "F.Mask") ${p.net.GP17.str})
            (pad "23" smd rect (at 8.89 19.05) (size 3.5 1.7) (drill (offset 0.9 0)) (layers "F.Cu" "F.Mask") ${p.net.GND.str})
            (pad "24" smd rect (at 8.89 16.51) (size 3.5 1.7) (drill (offset 0.9 0)) (layers "F.Cu" "F.Mask") ${p.net.GP18.str})
            (pad "25" smd rect (at 8.89 13.97) (size 3.5 1.7) (drill (offset 0.9 0)) (layers "F.Cu" "F.Mask") ${p.net.GP19.str})
            (pad "26" smd rect (at 8.89 11.43) (size 3.5 1.7) (drill (offset 0.9 0)) (layers "F.Cu" "F.Mask") ${p.net.GP20.str})
            (pad "27" smd rect (at 8.89 8.89) (size 3.5 1.7) (drill (offset 0.9 0)) (layers "F.Cu" "F.Mask") ${p.net.GP21.str})
            (pad "28" smd rect (at 8.89 6.35) (size 3.5 1.7) (drill (offset 0.9 0)) (layers "F.Cu" "F.Mask") ${p.net.GND.str})
            (pad "29" smd rect (at 8.89 3.81) (size 3.5 1.7) (drill (offset 0.9 0)) (layers "F.Cu" "F.Mask") ${p.net.GP22.str})
            (pad "30" smd rect (at 8.89 1.27) (size 3.5 1.7) (drill (offset 0.9 0)) (layers "F.Cu" "F.Mask") ${p.net.RUN.str})
            (pad "31" smd rect (at 8.89 -1.27) (size 3.5 1.7) (drill (offset 0.9 0)) (layers "F.Cu" "F.Mask") ${p.net.GP26.str})
            (pad "32" smd rect (at 8.89 -3.81) (size 3.5 1.7) (drill (offset 0.9 0)) (layers "F.Cu" "F.Mask") ${p.net.GP27.str})
            (pad "33" smd rect (at 8.89 -6.35) (size 3.5 1.7) (drill (offset 0.9 0)) (layers "F.Cu" "F.Mask") ${p.net.AGND.str})
            (pad "34" smd rect (at 8.89 -8.89) (size 3.5 1.7) (drill (offset 0.9 0)) (layers "F.Cu" "F.Mask") ${p.net.GP28.str})
            (pad "35" smd rect (at 8.89 -11.43) (size 3.5 1.7) (drill (offset 0.9 0)) (layers "F.Cu" "F.Mask") ${p.net.ADC_VREF.str})
            (pad "36" smd rect (at 8.89 -13.97) (size 3.5 1.7) (drill (offset 0.9 0)) (layers "F.Cu" "F.Mask") ${p.net['3V3'].str})
            (pad "37" smd rect (at 8.89 -16.51) (size 3.5 1.7) (drill (offset 0.9 0)) (layers "F.Cu" "F.Mask") ${p.net['3V3_EN'].str})
            (pad "38" smd rect (at 8.89 -19.05) (size 3.5 1.7) (drill (offset 0.9 0)) (layers "F.Cu" "F.Mask") ${p.net.GND.str})
            (pad "39" smd rect (at 8.89 -21.59) (size 3.5 1.7) (drill (offset 0.9 0)) (layers "F.Cu" "F.Mask") ${p.net.VSYS.str})
            (pad "40" smd rect (at 8.89 -24.13) (size 3.5 1.7) (drill (offset 0.9 0)) (layers "F.Cu" "F.Mask") ${p.net.VBUS.str})
            (pad "41" smd rect (at -2.54 23.9 90) (size 3.5 1.7) (drill (offset -0.9 0)) (layers "F.Cu" "F.Mask") ${p.net.SWCLK.str})
            (pad "42" smd rect (at 0 23.9 90) (size 3.5 1.7) (drill (offset -0.9 0)) (layers "F.Cu" "F.Mask") ${p.net.GND.str})
            (pad "43" smd rect (at 2.54 23.9 90) (size 3.5 1.7) (drill (offset -0.9 0)) (layers "F.Cu" "F.Mask") ${p.net.SWDIO.str})
          ` : ''
          }
        )
      `
    }
  }