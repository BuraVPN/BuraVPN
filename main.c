#include <stdio.h>
#include <stdlib.h>

int main(void)
{
    FILE *fp;
    char buf[256];

    fp = popen("netbird status -d", "r");
    if (!fp) 
    {
        perror("popen");
        return 1;
    }

    while (fgets(buf, sizeof(buf), fp))
    {
        fputs(buf, stdout);
    }

    pclose(fp);
    return 0;
}
