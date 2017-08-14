![logo 25knots](https://user-images.githubusercontent.com/3950661/29005494-bf29b8a0-7adc-11e7-8f79-bff5f4fd4199.png)

# 25knots
25knots is a small application that aims to help people getting the basics in their design process right. This tool is aimed a people that usually wouldn't have the time or resources to engage design in their projects. This is **not** a tool for designers. If you use 25knots and think you could do better afterwards, the Tool probably isn't for you. However, you are very welcome to contribute!

The easiest way to use 25knots is visiting [25knots.de](http://www.25knots.de).

## Contributing
I'm more than happy to have people involved in the development of this product, in any possible way. If you want to contribute, there are several ways to do so.  
* **Report a bug:** If you noticed anything is off during you use of 25knots, just [open an issue](https://github.com/Plsr/25knots/issues/new) in this repository
* **Propose a feature:** If you feel like something is missing or would be a great addition to the Tool, pleas [open an issue](https://github.com/Plsr/25knots/issues/new) and describe what you'd like to see implemented. Conceptual request are just as welcome as design improvements or additions to the codebase.

### Building the application
To build the application, first clone this repository
```
git clone https://github.com/Plsr/25knots.git
```

Afterwards, run
```
yarn install
```

and finally
```
yarn start
```
to get the app running on `http://localhost:8080`.

### Running Storybooks
After completing the previous step, run
```
yarn run storybook
```

Storybook is now running on `http://localhost:6006`.
