const { Profile, Role } = require('../../db/models');

module.exports = {
  getAll: (req, res) => {
    Profile.fetchAll()
      .then(profiles => {
        res.status(200).send(profiles);
      })
      .catch(err => {
        // This code indicates an outside service (the database) did not respond in time
        res.status(503).send(err);
      });
  },

  // create: (req, res) => {
  //   Profile.forge({ username: req.body.username, password: req.body.password })
  //     .save()
  //     .then(result => {
  //       res.status(201).send(result.omit('password'));
  //     })
  //     .catch(err => {
  //       if (err.constraint === 'users_username_unique') {
  //         return res.status(403);
  //       }
  //       res.status(500).send(err);
  //     });
  // },

  getOne: (req, res) => {
    Profile.where({ id: req.params.id })
      .fetch()
      .then(profile => {
        if (!profile) {
          throw profile;
        }
        res.status(200).send(profile);
      })
      .error(err => {
        res.status(500).send(err);
      })
      .catch(() => {
        res.sendStatus(404);
      });
  },

  update: (req, res) => {
    Profile.where({ id: req.params.id })
      .fetch()
      .then(profile => {
        if (!profile) {
          throw profile;
        }
        return profile.save(req.body, { method: 'update' });
      })
      .then(() => {
        res.sendStatus(201);
      })
      .error(err => {
        res.status(500).send(err);
      })
      .catch(() => {
        res.sendStatus(404);
      });
  }

  // deleteOne: (req, res) => {
  //   Profile.where({ id: req.params.id }).fetch()
  //     .then(profile => {
  //       if (!profile) {
  //         throw profile;
  //       }
  //       return profile.destroy();
  //     })
  //     .then(() => {
  //       res.sendStatus(200);
  //     })
  //     .error(err => {
  //       res.status(503).send(err);
  //     })
  //     .catch(() => {
  //       res.sendStatus(404);
  //     });
  // };
};
