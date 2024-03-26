# Issue Azure functions memory usage

High memory usage (~988mb) when posting a json body of ~77mb.

```log
[2024-03-26T07:41:55.911Z] Rss: 988mb (lowest: 61mb, highest: 988mb)
[2024-03-26T07:41:56.011Z] Rss: 988mb (lowest: 61mb, highest: 988mb)
[2024-03-26T07:41:56.112Z] Rss: 988mb (lowest: 61mb, highest: 988mb)
[2024-03-26T07:41:56.211Z] Rss: 988mb (lowest: 61mb, highest: 988mb)
[2024-03-26T07:41:56.311Z] Rss: 988mb (lowest: 61mb, highest: 988mb)
[2024-03-26T07:41:56.411Z] Rss: 988mb (lowest: 61mb, highest: 988mb)
[2024-03-26T07:41:56.511Z] Rss: 988mb (lowest: 61mb, highest: 988mb)
[2024-03-26T07:41:56.611Z] Rss: 988mb (lowest: 61mb, highest: 988mb)
[2024-03-26T07:41:56.711Z] Rss: 988mb (lowest: 61mb, highest: 988mb)
[2024-03-26T07:41:56.811Z] Rss: 988mb (lowest: 61mb, highest: 988mb)
[2024-03-26T07:41:56.911Z] Rss: 988mb (lowest: 61mb, highest: 988mb)
```

## How to reproduce

1. `npm install`
2. `npm run prepare`
3. `npm run start`
4. `execute requests in examples/script.http`
