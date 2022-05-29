
const products = [
        {
            id: 1,
            idcategory: 101,
            stock: 28,
            title: "Sedas Crema",
            descriptionOne: "Composición",
            descriptionTwo: "97% Poliester - 3% Spandex con un ANCHO: 150cm",
            descriptionThree: "Perfecta para kimono, batas, blusas sueltas, tops, vestidos formales y lencería de alta gama.",
            price: "50.000",
            src: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxASEhUSEBIQEBAQFQ8PDw8PEA8PDw8QFREWFhUSFRUYHSggGBolGxUVITEhJSkrLi4uFx8zODMsNygtLisBCgoKDg0OFxAQFysZHR0rLS0tKy0tLS0tLS0tLS0rKy0tLS0tLS0tKy0tKystKysrLS0rLS0rKy0tKysrKysrK//AABEIAMcA/QMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAADBAACBQEGB//EADkQAAICAQIEBAQEBAQHAAAAAAABAgMRBCEFEjFBUWFxgQYTIpEyobHBQlLR8BQjYuEHM3KCorLx/8QAGAEBAQEBAQAAAAAAAAAAAAAAAAECAwT/xAAdEQEBAQEAAwADAAAAAAAAAAAAARECEiExA0FR/9oADAMBAAIRAxEAPwD3CZYoXDC0SyB5CRCiIz+JQw1L2HosHq6+aLX2DX6ZLZ3IDmJzjXMZyBuZRyAzsAJOw5RVKx4WyXV+BTTVOx4XTuz0Gk06ikl0CxNNplFbDKI9hbUapI1ho87ELytMy7XPsBV7fdhm1qqwIpCWm08penmPrSJd3kLlWiwqkgS0/m/yLfKfiya1OaImQGq34srh+LGr4DZOZBZZZTfgNTxq5CvMc5yHjVzjR0rkCZOMhAOEwdwQBZMImAiwkWWxBEFigSCRIq8UWxsVRYLK89xCPLNrs916CvOa/HKfpU/B4fozz9lgZos7CkE5y5V1f5eYtK03ODaPC5n1lv7eBcM1oaHTKMUl/bHHJIp0M/WansuiLC3F9VrfAx9RqjmouAQrcnhdWGFq05PCybeg4elhvd9fInD9Eorxb6s1ILAak/aRjgkzuSSGLoCswFjYAtQKNjDO3T5xxA12hFYTGvKu8hzlLZOZGG1zBGkyNk5hi+VVcDjiy+TjYsWdKZZObyLHGiNyyq85OY7yIryAwpFl0wEZBUzTiNGQeLFYsNCQUaJfJSLLomLFNTUpxcX3TR4TUycZOL6ptP1R79Hivi+jktUl0sWf+5bP8sCHQHC6vmT8o7v17I9lRHCPP/D2m5YLPWW7PQ9gc/AtVZhepj6iQ9rJ7iFkSsl+TJqaHTJAdNT3NWmAXB64l5M4ijBRIssDrCBALYi8qx7lKOAQpFBIyCOoo4FRdTOuQLB3JF1dyOcxRs5zA0ZSO5BJnUwomSFEzvMKLZI0VyTmJi6x6pjEZGfzYGq5o0xDSYWMgEZBEyNGYMKmLwYaDCwUw/izSqdUW/4Jxfs9mv0NvIvxGrmqlHxTx69UTWr8ZnDo7L0NLJmaKexocwZ5+EtT1YsoZHL0UrryASiA/WgNVeBlIqo2cZxvuAut7dgyM7kuhV6gVbyRANLVeSCR1cX1TXmKKJdVk9tQ+sPo8lHAVUPb02CqyS/1ev8AUunjFpQBOIeNyfbD6eKOygNZswlI4g8oApRDLqZ1Mpg6gsq+SZOJkCrEwUbOpgYciV2FpoC0VjpoVyDxYjRPPcagwspmEg8GKRYWuRGjcGXayCjIJFkrUrBUeScoeD29Huv1HYyKcXqw1Yv+mX6pgqrCs/KaUUXhBAq5hoSBo8UdkyQJY9gFrrMCjnktqZbg0y4xvsaDLxA8yI70U8h3InOKS1K8V9wb1S8V90MTzh/5pdWGc7fPJ2OpwSxZ+SNRSCQl4f7GdDUDMLSY6TvTecgpRLQki4W86XwcCygDaDFiuCZO4IFVZ2JHE6kBlTQvYhucHFuL6rp5oXtgEsAhLDHq5mfYgmmtNMT1WnCQWLFIMNCRl0OxkGgxOuQzCQItqaVOLj4rHv2Z5yFjTw+q2fqj00Wec+JKXXJWL8M9peUsfuIdzZotd47Raebo1Jq6S8uMc1t1std0A0T2L6mX0Sfk/wBA2xtRawMtRjuDumI3NlcbPY1+vx3+4l/jJzeIRcn5Pb3fYb0nCXPDnlL+Xu/V9jao0CisRSS8lgLOaytJwxve2Wf9MXt9+5vaLSVrZRivZZB/KwFqnhkdPGJqeG1S7cr8YfS8+xl6vht0N65KxL+GW0vZ9Gbeon3E5anzDF5jDhrsS5Zpwn/LLbPp4+xpUaj/AOjN+nruXLOKa7Pv7eBgazS26V8zzZR/N1nBefivP9Ss3m8/HparhuuwwdFqlJJro1lNeBqU2GbHXjs/gG4khMI0R0vsuzjCyiDKxiuDuDpAOajTqa810ZlWwa69UbCkymo06mvNdGRc1gWxFM4Zp3VNbPqJWwNRy6g1Fo5CRjRnhj9F2QvPX6aEJDMJGfGQxCZGz8ZFNfpFbXKD7rZ+D7P7lK5jEJBdfOW5VzcJ7Si2n/f5+5paPUGn8WcK5l86H4o7TSW8orv6o8zp7v76mnDrZXsdBemP6x5rl6P9Dyeh1mGeoosU62vFNfdErpzdeccm+g/oeH5+qS8/QppKcPdeRuqGI7eBDn2rVQkcvngE7mKam7JcXTkb0y6SZjVXYZpae0EuuazKXiuhlTu3NzVVc0Gu7Tx5PGx5JXb77bhOnoNHI0ZVqUcSWfIyNFM1qpGddOZseR1+mejsTWf8NY/aub/Zm1pb01ldDT4jo43VyhNJqSxg8JwvXyotlprnvB4rk/44dvc249Txr3VNgxCZj0XLbcfqsM2OnPRyQORauR2cfAjoCQ6zg1jHEWiwUJF0yiX0KS369mY2q0zi916PsbaZ2cYyWGk/UafXk76/IFXc0zZ1nD3HeO8fzRkX0o049c2HabxuFhgxm4+g3Rqgc9/1twsG6rDHqvG6riOrUTTW543j/B3VJzrX+XJ7pfwP+h6mq0PKKkmnun18wlmx82+Y0eo+HeI5+lv0+wtxj4fccyqWY9eTuvTxMCm2Vc87prqiz24++br3Wop5ZZXR7rwHNLZlYZlcM4upxxLfI3Zq4RW3UZXXm8/U1uOi6CkoIq787lq5ZIkukrY4ew9o5ppewlrXgNwaec+q/QLG3B7HheIfRfOPTE39nv8Aue8r6HgPiR41csd+T/1SEXpv8OeyNilmPwr8KNelmK6cnIs+d/8AEbR4nC1bP8La2eezPoUTyPx5DmrivPP2Ncsfk+M/4a4u5x5Zv64/+S8T1NF3mfN9GnGSlHZr+8Hs+G63min32TXmXHHfGvR12ZQ1XLsZVNnmO1zJXfm+hrIgwqlkpKODKlYsvFgjuTTJhM6mAjIImATIlrOHqW8Nn4dn/Qa5jqYX681qNPh4aaYlZW0exuojNYkvR90ZOr4a103Xu8epZXLr8f8AGLC5oe0+sXcDbpX/AH4Czqa6FY2xvV6gcp1B5aF8ojlXEPYjpO3p42Jimu4TTavqin59H90I069DtetXih7a2VmL4d5P+XOcfJ8rIuEWZy559v8Ac2o6qLLfPj3wNqePH8ZtXDXtljL0yjEPZrYJZbX5GLxHjMei9hi+oW4pahv4frfJzfzPK9FsYEee+aiuje78I92ez0dSSSXRJJeiIQ32Pm3xDbzayfk4R+0UfRdXPlg35M+VWXc97l/NNv2yUvt7jhS+hexq0mdoPwIfqZmtw7E818XV55fDf9j0cDL+IacxT8G/0Lz9Tv48L8jDHdDY4PPbug1tJTkNPPW/pLzTqtPMaSxx27djYouC8dNmEhiMsmdTaMqZix6JQCEIVlGdOEAvk6mDImAZSLxkATLKZLF1TUaSMt1szM1Gn5eqNlSOzSaw98jcLzK8xbSvD7i8tOegv0H8u68PASlWs46PzLK5X8eMn5cl0yW5po03SijrNaniSWosOPUWvv8AqOfLBuCGrOSE1OX4mwa03lnwNKNTfRZHtHoMbvdkvTU4c4RoVBZf4n18l4G3XHBSqovfaoxz9vUkb+MH4v4h8uqST+p/SvVr+mfseC4ZHNkfU0fiXX/Nswn9MMpeDfd/sA4HXmyP3DEe5062Q1AXqWweBK3DtbBcQr5ov7l4MJLdYEW+48rfSKygbGorxlCNtZt5+oTwNae0FKJWIYv1sUXD8LTCpsNCm7YldeevTRwcImQmuqEIQaOM4dZxsaiZLZKkQBIl0wSZ1MYsGTKWVqX4iJnYkxdKWaDvF/cVspkuqfqa5Gh7X0w8eT+xevSt9tjYVa8C8a0PZ6JUaPHYdrqSLpHJzLjNqTkkvA8n8TcX6wg93s2v4Yv92Nca4zj6Iby/Jep5C5tt53b3b7srGk3HLNfgNP8AmLyTEYwNvgdWG37EI9DWgseoKIWJK3DVYwhSsZgRqEuIVb5xszMtgbuphzR9N16mTZE3K5dc+2dOIGcR6yAtZErleQoMOrcCzLqYYnp6Zs5zFclWzm9i/Md5geSZC4vk4VyQGLZOnEjqQSrJnTigEjBlREWiiyii8UUVReKIiNhHSOQN2COp4hGOy+p+XT7lDs70t3svF9DzvFOLuWY17R/m7sDq9TKf4nnwS2S9hOaKxbpKxZ/cC4DjgV+WSgFdW5ucKrwjPprNjSLCI1DkAiBosmStGK2MwYpBjFbIo3YzdTXh+T3NJC+sryvQsOprLmhW2I7JAbImnKxnziDGrIi8olcuo3zuSEOb2IjqiQgFuU7FEIVKLGJaMSEEZokIlkQhUTJOY6QCkpi9+qUfFvsiEKVm6nVSl3wvBdBOaOkKzoTWQU4kIEgbic5CEJVMUQNCpEIRrkdFoshCVoWAeLIQgNWy+MkIFvxn304fpsxWaIQ05FrIi04EIaY6f//Z"
        },
        {
            id: 2,
            idcategory: 101,
            stock: 11,
            title: "Cotton Aqua",
            descriptionOne: "Composición",
            descriptionTwo: "95% Algodon - 5% Spandex con un ANCHO: 170cm",
            descriptionThree: "Usos : Vestidos, pantalones, faldas, blusas, pyjamas.",
            price: "28.900",
            src: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISDxAQDxAPDw8PDw8PDw8PDw8PDw8PFRUWFhUVFRUYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDQ0NFRAPFS0ZFRktLSsrLSsrLSstLS0tKystLS0tLS0rLS0tLSs3LS0tNzcrKy03Kzc3NysrKys3KysrLf/AABEIAM0A9gMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAACAwABBAUGB//EADMQAAMAAgECBQEGBQQDAAAAAAABAgMRBBIhBTFBUWFxBhMigZGhMlLB0eEUQnLxQ5Kx/8QAFwEBAQEBAAAAAAAAAAAAAAAAAAECA//EABwRAQEBAAIDAQAAAAAAAAAAAAABEQIxEiFRQf/aAAwDAQACEQMRAD8AksZLM00MVHZwaZoNUZpoYqA0qghE0HNgZuX4dv8AFj1N+bX+2vr7GOG09UnNL0Z2ZoHNx5td139H6r6Gt+sXj8Y8OQ1y9mLJgqPPuv5v7jsVjCVoci6kbDC0TSsrgroNPSV0lGfoK6DT0FOQrP0E6R3STpAV0k6RuiaAVogzROkBaIw2gAKLISgAtimFTKmQJMjZQUSWyAWygLohFY0wlQGi0FOVBqhCYSYGlUGrM0sNMDXNjZsxTYybA272ZcvE13j/ANf7BRkHRkLqWM2HJ/0zSu5eTFNfD915i0nPZ/qvIM9DKCKKiMplogXQ6K0HorQNDorQTIFBoph6AYRRWiyaApirYyxNACMiSpkdMhU0BkoZRmy0QKuiCrZCNC6QXJocguQEFoY4B6QJLDkHpLQB7C2AQBqoOcghFgbYyj5yJnNVDYyMI3dHt5ewLQGPKOVJjWcLLRLnX0KRpnoWimgpL0F0sgzQFIBbKZbRWgK0UwmLoAKYCRbGRIFxIYSQu60RovKzJkoZlsz0yLimyE0URdb2gWhzkByVCWiaG9JTkKVovQfSTpADROkPReghei9DVISgBWiD+gixg0uWNmyLGHMAMjLvsE59V5CukdhZWbA7LVA5o6fLyf7AdZpg50A2K6iKgo2RItEoBdCbYy2LlbAuIHTJJkNkbgbZlzUOy0Y8lkUFsWEyIiqUkGSiBG/QLQZYC+knSHovQCuknSN6SdIC+gvpGdISkIWpCmA9BJAB0lqRhTBqukmi9EYFaGROjNl5Skw5vFUijtvT8zFlx9L+H5P+hyl4v8M3cbxFV2f6DpLlMCmSqWvo/IJM1GBJg0wWwLooCnsdjgDHBolGWpEAth0zNnsjROazPTLtgojUQOIJMjpkClJBiRAjTomiIsomi0i0i9AUpL0WUEqaIRlEBbIgUggIRoGr0ZM/K+QNOTMkcrxDxSYW6pSvT3f0Ry/E/F31rDhX3menpSvKfmicmMHDSyct/wCo5N91L7pf8U+yXyakS1myeK1f8M10++vMvFVebTBw/a+qrSwyp9t+n6He4uXDnnaX3d/HbudJ6/HPk50fKHY4a7o1/wCkcvT7r0Y2OOLiTT+LfXDT813/ADKx5RuHH0TVPt27GCbM8WrWyqJC2ImtvRsxQKsMmQ2yC8tmGwZrMOWg82QQRpQUyRIZEgFEjdESC0EREIWA7QSRRaKi0XsHZNgWRsrZAIWkWkC2BYGTJoXlzaOfyeVogdyOT8nlvF/Gm9xhffydr0+J938g+J+IVbcy2p9X61/gvwDw7ryqmvw49PXvXobk+prsfZbwdYp+9tbyV32+7SM0eFLlcnJmy7eOa6IXup7fp6/md/l5lGNv2TC4OJTCXpK/V+o1M9suT7PYmtTKhr18gMPgvT/5IWvVJiPE/FsjbnD6dup+/wAHA5vK5cfjrbn1alNft3NTyxm+Ne2lJTq8kv6ICuZjny/E/nueM4fjDyNSpuqfs9Sjr8iuhJf7n+yJ42myNvK5tW/ZL0FzZlwrf0NuCNv4RrqMe618XH7+ZulCsMDKZytdpEqjJmyhZspjqtkbxKZcgobCIJEj4kkSMRUUkEkXovQA6LIyANIQhRCEREEXohTYu8gB1ZmzZhebOc/PnIpnJ5Prs4XN5Lrt36fb3H57dP4Fzi9TpI53kyTh9X+SPWeDcToxrfm+9fVnJ4PH6rW/Ke/9j0flP0ROVWOJ9ouX043+S/c7GR6x/keP+0/K7z7dcb/Jpnsdbhkv4uOHmw6e0LfNpdnDZ0svHZkzYDrK42WMk8xL+DDMU/XtsLHgqn1V6mnj8TvvX5mz7oamWs8Y9LSN/FxdhOONs6GKNI58uTpxg/JCM2ULNl0Yct7ObrIrJWwNFpDYgKGZNGPGXjxj5kIqZCSDUhdJQvRGg9E0AvRQzRYA7IwEwnRQSKqhV2IyZwG5MhkzZxGbk/JlrJsBmXLsy5XvshrRUyajnaT92MjF6joxjen0LqNHhmH19zdyXqX9CcSNJC/EK/CzDcfPPtJe618s974DyVlwY69ahb/5Lz/fZ898a28j+DtfYnxLpbw0+zfVG/T+Zf1/UVp7P7oXXHNkaa2hilFlYsYFh0KtehuzIyzO6LrOCwYxmW9Il3pGDPm35Mxa6SJmy7YpAoZMmWhRJqxwBjgfKKg4QyUDKCKgyiIsCMrRZAodELIBldCqyC8mUw8jkgaM3J0YM3J9jNkzNlShAzbY+EKxoekaYqJbGrGXEjUipgZkLDG6CryH8SCVZG3GloweJ1+Fm+vI4vi9/hZG3jedj7t+7F4I1prs09p/J0MmPa17iLwue3oVHqfA/GupKb7V6/PyeijKmuzR81x9vLszp8XxO5WmzNV7PJ3E3lmUeeXilv1GRlb83+5NPFvzcnYgkwMiCKuJNEQTHjGqSi5kdMgSMTKgkEgS9hFkJsrYF7L2DspgHsgGyBXnM/IMV1sBtsKZGC5kZMlxI7HJplIkfCKmRiRVHKDhAjEEwNeejdx57GLEts3R5GaYLPfY4Hi97Wvc6/Js4XNvdCK5znyJS32NLnYnoKFPD7EvHofjnuMySBknaNPH5Wn3AqRNSZsWV6DjZFXkbscnlMPJqPJ7+Gb8PjP83YmK9DIZy8XiEv1NMcpe4Gtk6jN9+X94EaVQWzMrDmyh2yJgqibAJsrqK2UwC6yAEA8tMj8eMLHjHxBQMQOUBSgtFAzISRZTfYIiCqgEyNgPwI09RnxIO2ZUjlZDj5Hts38mznssE0KSGE6dlQWFBudh447BdBNGW8QusRv6AKxEHMqBN4zqVjFVjXsGnM7rybQ3HzbXn3/+mi+MvQRfHA14vFPft9TZi5yfqcK8QKhryevoTB6mOUjRGc8nHKufPujZg8SXq9BXppyjFkOJh5m/U1Y+QEdLqLVGOcwychRp2QQrLA58SMUlyg0VFJFbCYDAtsXVEbBKlHIU+YCDxEGiWLy2GZszMqy5mIpDbAo1ArQ3HBUeZpxIqGKQlASQaIE9BTge0URWboArEamitAY3hF1hN1SC5A59YBbwfB0nILgK5lcYVk4nwdboRPuyo4f3FT3ljMfNqf4l+aOpeFCMuBExdXg8QT9Tbj5KZxMvFXp2ELPU+u/qMXXqozfJDicfltr/ACQg/9k="
        },{
            id: 3,
            idcategory:  102,
            stock: 7,
            title: "Zig-Zag Colorido",
            descriptionOne: "Composición",
            descriptionTwo: "100% Algodon ANCHO: 148 cm",
            descriptionThree: "Minimo de compra 1m.",
            price: "31.920",
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyuVXtzYmGUhAAhhzdbh3Eww4tFQB9x3g4ug&usqp=CAU"
        },
        {
            id: 4,
            idcategory: 102,
            stock: 16,
            title: "Full Grain",
            descriptionOne: "Composición",
            descriptionTwo: "97% Poliester - 3% Spandex con un ANCHO: 150cm",
            descriptionThree: "Perfecta para kimono, batas, blusas sueltas, tops, vestidos formales y lencería de alta gama.",
            price: "50.000",
            src: "https://audaces.com/wp-content/uploads/2020/08/tecido-crepe-450x256.png"
        },
        {
            id: 5,
            idcategory:  102,
            stock: 98,
            title: "Tulle",
            descriptionOne: "Composición",
            descriptionTwo: "95% Algodon - 5% Spandex con un ANCHO: 170cm",
            descriptionThree: "Usos : Vestidos, pantalones, faldas, blusas, pyjamas.",
            price: "28.900",
            src: "https://audaces.com/wp-content/uploads/2020/08/tulle-fabric-450x300.jpg"
        },{
            id: 6,
            idcategory: 101,
            stock: 3,
            title: "Velvety Fleece",
            descriptionOne: "Composición",
            descriptionTwo: "100% Algodon ANCHO: 148 cm",
            descriptionThree: "Minimo de compra 1m.",
            price: "31.920",
            src: "https://audaces.com/wp-content/uploads/2020/08/helanca-fabric-450x300.jpg"
        }
    ]

export default products