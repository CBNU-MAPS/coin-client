import React from 'react';

export default function InaccessIcon() {
  return (
    <svg
      width="100"
      height="100"
      s
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink">
      <rect width="100" height="100" fill="url(#pattern0)" />
      <defs>
        <pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1">
          <use xlinkHref="#image0_627_18" transform="scale(0.0078125)" />
        </pattern>
        <image
          id="image0_627_18"
          width="128"
          height="128"
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAABWzSURBVHic7Z15eF1lnce/v7Pce+692QNhy1KU4tMiS8V5ZMQF9aE6AwgoLYuKw+jQpgVcELokwWObdKdlCklakSkMo0KcmTIwCoqjIoILPoMMpA0UTJuEatMlbZrkLmf5zR9pME3uPfdsd2k9n+fJ06f3vNu97++87+/9ve/v9wIBAQEBAQEBAQEBAQEBAQEBAQEBAQEnOVToBqh9958psfQVCHw5GDEwXmVgS0vDop8Wum1+srKvfS4x3QrC+SCMMvATg43Nav3tewvZroIJwNbfb5UP1Oh3M2gZgNjU58xY39Kw6O4CNM13Vva1byDQnWkejRJ49SmD0roF71+g5b1hKJAAqHu3RiXdfBrgj1ilI9CNTfWNj+WrXbmgta/9RoC+Z5WGgedilPi7r9d9PZ6vdk0g5LtCAJB0oy1b5wMAg9tUVqV8tCkXjLedWrOlI+CjoxxemY82TSXvAqD2blMAfNlm8nfJ/ad+PpftySXH2v4uO2mJ6dbNuzaHc9ykaeRdAGQxcQ6AErvpGbSsi7vEHDYpJ3Rxl3hMv7EHofSILNoSFj/JuwCYREmHWc7dNXDg+pw0Jocca/O5TvJIzn8bz+RdCVRZFeT+mn4GznSQbYdeN3i+SqrpR/3xN2Lz2TSvZNOsJ4YIUdgbjcS2zW6o+fF8mm/4UYfUX/MqgNl28xBoYHndwnoiYq/1O6Egq4DWvvZFALU7ysSY39yw6Adu61S71VCclEdSeuozhmGGgPEvH1WiiERiEAQCgD+D+OGwPNZ61+l3jbqtq3VPxzwQupzkYdCilvrGTrd1uqUgqwC9bv8WBp53lInQxMyuBHZZz6ZLjxjSwXgyccNE5wuCgMryKsRiJROdDwCng2lpUot1r+zvvMxNXcxMIDQ5ygM8b9Tt2+qmPq8UzBC0sm/ruwnGK0hjBMqEwPSh5Q2NLzip566edZdqicRzJpvvKJJEAqrKKyGKlrplnE26smVG48+c1Leqr+PDJvBLB1lGGeKFLfUL3nJSj18UZAQAgJb6BW+BaKmTPEy4xEn6plfvrTOSyZ8d1/kAykvLsnU+AERI4CdX7O6c46iNjA86SQ+ipYXqfKCAAgAATbUL28H4ue0MxI7amxCSv9RNIzT5MyUSQUgOZcoylZggcNeat7aW283AIPujKuPnTbULnelCPlNQASAiZja+BMZRO+lN0Et2y16yc22XlkrNmPyZKIooidg2QUxwjh4yHrSbmBm/s5cQR5mNL+Vb659KQQUAAFpm3N4LQtZNHwJeaq5d+JydMpf23DsvkUzMm1pAWawM5OAFfQfGvPGVS3aMhn2/AOh/syYk3N0y4/Ze543xl4ILAAA01TVuBcFqiddrmsb1dt6WO3e0NiSSY99lPj5pTIlClmUPraSNK/Z0XJwtlUqqyRDmA9htkezxprrGgmj9UykKASAi1msHbwJjBYDhSY9GAdwnaeIc22+LQS+YpnFcT0uShFjU9mIjE2GB8LgdfaClfsFbupGcA+A+jH+HCYaZ+Vt63eDnCz30T1DwAyFTUXu3KQIlZomSyZoW7VHPviVhN++SnWu74on4cUM/Aagsr4Ik+bOpyOCulvrFtk3TG/s3RuIUfo+hC2SystPJ98kHRScAblnSs/7qeGL0CUx5r2LRGGIRz2//cRD4lqb6xQ/7WmiBOCkEQN21uexI/Mg+wzCUyZ9LooTKiqpcfMlRFnFxy1mLXve/6PxSFDqAV0aSI89P7XwAKC0pzZWExwQD31W7u2wbFIoVRxPjiv4HPiCw8AkGSgTCDi3MT6g1i0dy1Tg7LNmxpjmRTFww9fNoJApZ8qL1W8PAxWLpARXA8pxVYoO1+x8q1cZS1zDxLAJGQPTT5rpGe7YI2JwC1MH2EjlBjzJwzXEPGIMg/mpz/eLvO2y3L9zZvWG2oY+9aprmcSOZKAioqqh2t+Z3hskmXe50v8AvWvvabwTTfSDUHP+Et+sKbrbzcmb9hZiZ2gY6nwTjysyJ8B+6RovUcxoHbbTbF1RWhZHX5D+ndO3UyZ8TgPKyCifmXk8QaEAj+UK17suH8lIhAPXNzhpJ5g4QPmuR7Kmmusarsy03s+oAbf0d8y07HwAIn5VC/NrKPe3XZSvPL8Z6lMendj4AhBUlb50PAAyulTj5nXzVt3JP55VSiP+QpfMB4KpVfVvmZUljPQJs/f1WeX+N8QaAGXYbyMBjomDetrz2toN28zilZde6jw6PJn7ObB7XfkEgVJdXg4RC6LZ8Q3P94sdzVfqqgQeqDVN4gIAbHGTbfeqgeK6Vz4HlL7W/Rvt7OOh8ACDgBtMUXmvb3XGFk3x2UVmVxuKp/5ra+QBQEi0tUOcDAG1RBzbX5qLktt0dV5im8JrDzgeAGftP1T9llcD61yLhQocVTnA6C3iydU/HF13mz8hYt/LfmqFPM8fKsoxwOO+nqidTIZnSQ25PLWWira/zH1nAUwBOd1UAkWUfWgoAmfBySlUAob3tjw+e5qGM41iyc/1VST35yelPaHynr/B2rbmr+rfc4ldhat/9ZzL4fngy2LGl6dlSAAzB/IX7igEAMZb1rIqIHdReVdH05Pen7vIBQCwStXPCJy8weFPrHx9o8KMsiaXrAES9lGECllvolgJwT91tvwXwjJcGEHCOl/wTjMWVH+u6Ps2oL4oioj7b+j1SBln4F1+mAjJnesuPH95Tv9jyEE1WjUlk3OT4BO/xDHnICwBY2rP2c8lkIq0vYWms1MkhrPzA+Hhrf6etAyTW5ZBr2wIDz+l6MqtbXVYBWNawaMioG7wMTDeD4Xjzg4GnneaZjNqrKslU6tvprBnhUDiva34nELB25e77z/ZUiOjit2O8DqabjbrBj6tnf+1wtuS21kwqqWZzQ+Ojev3gbIBvAtBtsznPOLFLp2NsTHnCMIxp8yABKIk6Pt/3DhKJiAoKokIEEuXEATlGgujpwGdz7aLfwP4U3A3wTXr94OzmhsZH7XpRuRo8VVYFaeC0a2FyMwgXZUjWrwv6B9XaOwbc1AEAd+/YcHkiNfKTqXv8wLjiF3MoAO8rmY2LS96LU+RKCFNkn8E4oA3h5dEdeOnoq26bPA0ifK6pbpFlfAArWt9uryNDeJHB6W0MjD9AoFa9dt92N65znmZPZqbW/s6rAHyDgA8dKy/JjB8ILN7dNGPBn9yWrbIqDHdL+3VNr5r6TBAEVDvc7Lm2+nLMjtrTR9+I78a/H3gGnE7ynHNQT9FsL/sk42F0hHUgmgcgBIAZ+BWADc11jU95OV7mm/qk9m6qCAvhqlhKf/uOmXd49nJd0r3m0XgqkVaJKSsph+LA6HNRbBauqLrMUf3PHn4Bvzv6f47yZIT5u80Niz3HOdi8a3N4NCSdRbp4cOm7Fxzxo2nFpj8DAJa8du+FCX3k5XRLKVmSUVFe4cjos/CMG1EtVThqw7Axgvv3PuoojyXMn25uWPyUfwX6Q1GeCDKQ/FGmdXRJrMRR5wskoEqy7djzDmViCRTBP9MyEz2wdv9Dpb4V6BNFJwBLe9avSWmptLEDFEVxfMpHgujaRCyRf9ZFAur1RKogcYCsKCoBULs3ViWS8XTh1EBEbty6IJL7rzh1peAVZr5txcAWtxtsOaGoBGCEk0+Zppl2UR5VohBcbPUKHgTAi/BkLNI02/3eMfRC0QjA8u61n9D0VFrXaoEERCPu9kS8vMV+jwAAQMClqwY6P+d7wS4pGgFIGHranT5g3LnD7QFPLyOAl7xWMPMGJy7nuaQoBGDpjrVrdGP6+T4AkEQRihJxXXaxjQDj0GmGbH4zR4U7ouACoHZvrEqmkmkVPwCIRUo8GSu8zOM50AHegcG3t/V3TPNnyDcFF4AxJJ8wOL3iJ0syQmFvu32eRoAcCgAAiRkFVwgLKgDNu9ZfltRSH870PBZ1ZvRJhycdIPc/z4dWDXTemOtKrCioAMQT2uOZFL9QKIyQp4AO44jFOwIAAJhxbyEVwoIJwNLX139T01M16Z4RAaUe9von48kOkJ+f53RN1lvyUVE6pn1DtXdTxeo9HZW5rFTt3VSRTCQyBlNUwpGiOOSZr8mZQF9Z0X//+bmsY/Wejkq1d9O0HTEJGHe2kPtq7mTCYgB1BoDWvg4AOARgiIBDPP43RKBDYPSTaD7TVLv4D24aMzqW/E9jShiXCYjga0AHk92HFzbgOTSxXSQB4n0APuEm84rdnXNE4k8xUS2DqwioJKCKgSoAlQCqDACSGEZrX0c/iB/Qa/dvVEnVSWVVkgZqtmf1/0sDA/9antRvdbL/f3fP2vcnE4mXMhp9lChiMX+GfwA4M1SDW07L5kaXnn8bfBJ7km/71pZsMHB1S/2iJ+2mV3u3KaIQf5AIjs8aEPDkzLpTPiOI/TUL3HT+sUJuHg7LW5zkMXQjo+JHBER8PuJteBgBzPyNAAAAYqxzckOKJMW/7abzAYCBT7/ef/BWgdj27R2ZivpiW1/ne+2kXPr6uus1LZXxUoSIEp0cuNkXvHSil+nDFYT3yAM1/2AnaVt/xwVgd53/l+rwZQGEWV4KAUAMnmsnoaZpHRkLIUJU8eQEkxYvnZjvEQAAwPjW+j+vzzoMMvNceNZTebYAwPOxF54WoWI6S3auadM0bdoBzwkiSsTVdm82vChyXqYPtzBwZioV/WrWdESn+FCdIgDwfEOGwGR5uYLaqyopTc9o78/V2w+cgCMAAGZaks2ploAxH6oyBAb8UHMtnT/G4so2w9AzjjRKWMnJ2w+cYDrABIRSllOWwacIsB0424J+QSDa7qkIwsta3b5nMz0e3+1LZfQQJvi77p/KCWIHmA5T4+r+9oyODDNrT/kJgFe8VEGg7QJJWhsDfS7L6GUW51l5pIxy8vs86cKGqSguj3rZxfTg3JFpuZonZIMzXzo5n+YbIvF1sA5KnRnCHk0SVgnLz7hjP0zjMox7mmQjDuBtZv41gZvlSNjyqpM7d7Q2pHTtcqtWuD3qZZcTyQ6QhvmrBrb8baaHy+oWv6kn9QsBtDDzrzE+nWe9fpaB59kwPqaeueCABByL2Q98uG2g/SIYuIBBxIQhYj5kgodElg9pHBpyGuhYZPExjfWMS5WIokDMcUwfjTWkWEOInO0smmxizCx4XGcyTV4D4KOZEqgz7xgG0Hrsb/yz3m2KTKlKg7QqAVTJRFXEqCQwG6L4yj21C9+ZOnK237G8e9NFo9rwyxmtfgCqKqshCrnf9PlM9VzMir7bUZ43E314fP8Pc9QiZzAJV7TULfxRLsrO2euXQuJRqzk0rCh56XwA+OnhF5Fi+7ezG2zgfw6/mMMWOYPYXJ2rk0M5EYBlb6z/gJZKZjQPEwExJX9hXYaNEXTt/xGOGtnvghw14ug68DQOaJ4Dm/jJBa0DHdfmouCcREZIafpDVvpzKBTO+37/nuRedPzpezhHqcepchVCgowwjZ83THIKGuvYrx3Cm/E+aA5Gi3xBJrUw83a/bxrxfVhZunPDxfHkyO+tVlCV5ZU5jeR90pIDD2PfpwDdTD1s1fmSJAWd7xYSVL91AV8FoKX73jlaSrPcGs71uv/kht+3aqDTMvSrU3wVgAS0R6zCqoiCAEWedrFHgAOYcY+f5fkmAC3dm+ekUgnLg42RSLRIY5KcUFzStmeLhXXVGb4JQJLGHrRST4kISti9j1/AX2DBVP0qyxcBuGvHP89Maqn3WaWJKBEIRRfS8wSF8cG2gfaP+VGUPyMAj21jc3r8/gmIxs/7BfgHG+SLM4nnV1J9ZXPtEA/1WS1PwqEwyksL6w4vk4RLSi/C+bFzUSFNDy3PYBzRj6J7bBdeHH7Zkem4UAjAR5bXL/ISx9n7CDASGn0k29o0V8e97BIiGV+ouQYfKf8bVErlaR1OCYQKqQyXll2ML552ra8RwnKFCTR7LcOTAKhvrq/RUinLuUiWZI+3dnvn4xWX4IxQ2vgTaamRq3F5xaU5bJFvzLVzo7kVngRgTDPa2bR++yMeonv4gUgizo+9x3G+86IzHZ8hKAQEZD1BbIVrAVC7u0Kapl1tWbhACIcLa/gpF0tcdaRIAqplZ9FFCwERrvdyWZVrAYijd7VhpHfwnEAJRwpu95E9vMU5CiPvN7JkSo1uM7sWAM3U/ilbmkgRGH68xQgqvIu6TRba8SZKh6tfZ8mOdYt1XbeMeyvLoaLw8ffSiXkKEOEHVYlkiSs/QVffUDO0jMEdJogUeO73g0JPX04g4q+42Sp2LADLetZdahjaGZaFCoRwqDjW0SesY4hzZrUOdKS5U9EaxwKg6fp92fwllFAkH1e328Lw4PpYCOdQLxDT15zmcSQAy3auqtZ0PavhQVGKZ/jX2YsAePabzTdznQafdCQAOtN96S5tnowsy5DE4lk+Desjru/+OWwM+9ya3MMmbneS3pkA6Pp12dIUw9JvMinW8GbcuevjnuTbGDWyelkVH4QvOLmv2bYALNm57nbDMCzHdqLiUf4m8+zhFxB34OaVNFN4ZsjTJlshCbOU3UYzgW0BMMzMAR4mUMJK0Sh/kxnSj+DhfduxO5E9FEJ/8k94ZHB7sTmGOOUWu0tCW4nU7o1VQ9rRg9ncpavKqyBJxTP/p6NUjKFSKp9mITTZxJA+jGFjpEAt8xfBEGctP3tBT7Z0tnorKRmf5ZR15xMRxCJS/jJx1Bi15SJ2omNI+mwAWQXA1hRgMtdnSyNLUvHd4v1XDEGwpY3b0wEMznqkh/IQWTvAPmRmjsoyGVu9xgL2Zq0wePuLCiZxh510tgRA1qWubGlM48Qym57kJPSjVbYuPrYlAG3n39kviqKleqybup2iAvICPaaeNz9lJ6XtiTskhb5j9dw0GZpmq86A3GKabGywm9i2AET47CWiKFpGp4wnCx5UKQBYdU/Dbd12E9sWAPW8+amQGPkkCZkjVCSSCWh68TtUnLQQfnhu3SmqkyyO1m5rz/vGr6JKdIEgUEaN7+jI0UIHWPwrhTpO3SdeO5/mO9rDdrV4W/bG+g+kEqmnNUNLe7dQOBRCWUlFsDTMD78hE61NMxa5imnnqYuW9mxYqOupJs3QzprqICKJIspLK4riYOhJQJKAgwwcAOMgwHtB1GOS+ew9dbf91kvBvr2jS3etnmNqwnsZ1EDMZzHM04hQLYuh4bCijAmCUA1wFRjlACoAlAIoftcb/zABHDn2N3zs7+j4v3SQYR4E4yAJwgGGeZBYPABd36+X0EG1ZnHOdqgKOkhv7N8YiWulZaZslLFplokwK1gQy2CihMARExwRQAoDURYQFszxf2FyDAKFwCjB8UJUQlOEikEEcCYXnzECpl14xYxh0F8OExIwzAQDE5/z+P+JMUwMwyQaFpgNEA2bbOoAHWbiIyTSsGEYR6EIw7nsxICAgICAgICAgICAgICAgICAgICAgAAL/h/9FNLxKl1LUQAAAABJRU5ErkJggg=="
        />
      </defs>
    </svg>
  );
}