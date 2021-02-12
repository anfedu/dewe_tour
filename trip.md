# TRIP IMPLEMENTATION

## A. Requirements

### 1. GET ALL DATA TRIP

> **url** = {your_host}/api/v1/trip
> **mehtod** = GET
> **response body** =

> ```json
> data: [
>   {
> ```

    "id": 1,
    "title": "6D/4M Fun Tassie Vacation + Sydney",
    "country": {
       "id": 1,
       "name": "Australia"
    },
    "accomodation": "Hotel 4 Nights",
    "transportation": "Qatar Airways",
    "eat": "Included as ltinerary",
    "day": 6,
    "night": 4,
    "dateTrip" : "26 August 2020",
    "price": 12398000,
    "quota": 15,
    "description": "liburan ke australia kali ini asik sekali boy",
    "image": "ausi.jpg"

},
{
"id": 2,
"title": "6D/4M Exciting Summer in South Korea",
"country": {
"id": 3,
"name": "South Korea"
},
"accomodation": "Hotel 4 Nights",
"transportation": "Anyong Airline",
"eat": "Included as ltinerary",
"day": 6,
"night": 4,
"dateTrip" : "30 October 2020",
"price": 10198000,
"quota": 15,
"description": "liburan ke Korea Selatan nampak nya asik kali boy",
"image": "korsel.jpg",
},
{
"id": 3,
"title": "6D/4M Wonderful Autum in Japan",
"country": {
"id": 5,
"name": "Japan"
},
"accomodation": "Hotel 6 Nights",
"transportation": "Qatar Airways",
"eat": "Included as ltinerary",
"day": 8,
"night": 6,
"dateTrip" : "28 September 2020",
"price": 14398000,
"quota": 15,
"description": "liburan ke Jepang di musim gugur mantap bah",
"image": "ausi.jpg",
}
]

````

### 2. GET DETAIL HOUSE

>**url** = {your_host}/api/v1/trip/{id_trip}
**mehtod** = GET
>**response body** =

>```json
data: {
    "id": 1,
    "title": "6D/4M Fun Tassie Vacation + Sydney",
    "country": {
        "id": 1,
        "name": "Australia"
    },
    "accomodation": "Hotel 4 Nights",
    "transportation": "Qatar Airways",
    "eat": "Included as ltinerary",
    "day": 6,
    "night": 4,
    "dateTrip" : "26 August 2020",
    "price": 12398000,
    "quota": 15,
    "description": "liburan ke australia kali ini asik sekali boy",
    "image": "ausi.jpg"
}
````

### 3. ADD HOUSE

> **url** = {your_host}/api/v1/trip
> **mehtod** = POST
> **request header** =
>
> ```json
> {
> ```

    "Authorization": "Bearer {token}"

}

````

>**request body** =

>```json
{
    "title": "4D/2M Lembang",
    "country": {
        "id": 1,
        "name": "Indonesia"
    },
    "accomodation": "Hotel 2 Nights",
    "transportation": "Travel",
    "eat": "-",
    "day": 4,
    "night": 2,
    "dateTrip" : "29 November 2020",
    "price": 2620000,
    "quota": 10,
    "description": "liburan ke lembang bersama keluarga maupun teman lama",
    "image": "lembang.jpg"
}
````

> **response body** =

> ```json
> data: {
> ```

    "id": 4,
    "title": "4D/2M Lembang",
    "country": {
        "id": 1,
        "name": "Indonesia"
    },
    "accomodation": "Hotel 2 Nights",
    "transportation": "Travel",
    "eat": "-",
    "day": 4,
    "night": 2,
    "dateTrip" : "29 November 2020",
    "price": 2620000,
    "quota": 10,
    "description": "liburan ke lembang bersama keluarga maupun teman lama",
    "image": "lembang.jpg"

}

````


### 4. EDIT HOUSE

>**url** = {your_host}/api/v1/trip/:id
**mehtod** = PATCH
>**request header** =

>```json
{
  "Authorization": "Bearer {token}"
}

>**request body** =

>```json
{
    "title": "5D/3M Lembang + Bandung",
    "country": {
        "id": 1,
        "name": "Indonesia"
    },
    "accomodation": "Hotel 2 Nights",
    "transportation": "Travel",
    "eat": "Include",
    "day": 5,
    "night": 3,
    "dateTrip" : "29 November 2020",
    "price": 2950000,
    "quota": 10,
    "description": "liburan ke lembang + kebandung bersama keluarga maupun teman lama",
    "image": "lembang.jpg"
}
}
````

> **response body** =

> ```json
> data: {
> ```

    "id": 4,
    "title": "5D/3M Lembang + Bandung",
    "country": {
        "id": 1,
        "name": "Indonesia"
    },
    "accomodation": "Hotel 2 Nights",
    "transportation": "Travel",
    "eat": "Include",
    "day": 5,
    "night": 3,
    "dateTrip" : "29 November 2020",
    "price": 2950000,
    "quota": 10,
    "description": "liburan ke lembang + kebandung bersama keluarga maupun teman lama",
    "image": "lembang.jpg"

}

````


### 5. DELETE HOUSE

>**url** = {your_host}/api/v1/trip/:id
**mehtod** = DELET
>**request header** =

>```json
{
  "Authorization": "Bearer {token}"
}
````

> **response body** =

> ```json
> data: {
>   "id": 1
> }
> ```

```



Berlibur dengan keluarga merupakan hal yang menggembirakan dan mengasyikkan, jangan lewatkan akhir pekan anda, mari tour dengan dewe tour
```
