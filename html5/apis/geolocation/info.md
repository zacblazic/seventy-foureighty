# Geolocation

Used to determine the location of the user in the world.
While it used to be part of HTML5 it's actually its own specification now.

## Request Patterns

Two different types, but both are asynchronous.

### One Time

Location is only requested once.

### Continual

Location is requested continually, multiple times.

## Location Techniques
### IP Address
#### Pros

* Available everywhere
* Processed server side

#### Cons

* Low accuracy
* High processing overhead

### GPS
#### Pros

* High accuracy

#### Cons

* Long operation
* Not optimal for indoors
* Hardware required

### WiFi
#### Pros
* Accurate
* Works indoors
* Quick and cheap response

#### Cons
* Ineffective in areas with limited access points

### Cellphone
#### Pros
* Fairly accurate
* Works indoors
* Quick and cheap response

#### Cons
* Requires access to cellphone or modem
* Ineffective in areas with few cell towers

## Location Options
### High Accuracy
* Boolean (default false)
* Attempts to get more accurate coordinates
* Might not work
* Might take longer

### Timeout
* Milliseconds
* The maximum time allowed to calculate
* Default not limit

### Max Age
* Milliseconds
* Determines how old a location value can be before it is recalculated
* Default is 0 (instant recalculation)

## API

    navigator.geolocation.getCurrentPosition(success, error);
    navigator.geolocation.watchPosition(success, error);
    navigator.geolocation.clearWatch(watchId);
