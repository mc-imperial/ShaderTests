#version 320 es

precision highp float;

precision highp int;

float compute_value()
{
 for(int i = 1; true; i ++)
  {
   int donor_replacementGLF_dead10sum_index = 1;
   donor_replacementGLF_dead10sum_index = i;
   float donor_replacementGLF_dead10sums[9] = float[9](1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0);
   for(int GLF_dead10cols = 2; GLF_dead10cols <= 4; GLF_dead10cols ++)
    {
     int GLF_dead10rows = 1;
     GLF_dead10rows = 2;
     for(int GLF_dead10c = 0; GLF_dead10c < GLF_dead10cols; GLF_dead10c ++)
      {
       for(int GLF_dead10r = 0; GLF_dead10r < GLF_dead10rows; GLF_dead10r ++)
        {
         switch(donor_replacementGLF_dead10sum_index)
          {
           case 0:
           donor_replacementGLF_dead10sums[clamp(donor_replacementGLF_dead10sum_index, 0, 9 - 1)] += mat2(1.0)[GLF_dead10c][1];
           case 1:
           donor_replacementGLF_dead10sums[clamp(donor_replacementGLF_dead10sum_index, 0, 9 - 1)] += 1.0;
           case 2:
           donor_replacementGLF_dead10sums[clamp(donor_replacementGLF_dead10sum_index, 0, 9 - 1)] += mat2x4(1.0)[GLF_dead10c][1];
           case 3:
           donor_replacementGLF_dead10sums[clamp(donor_replacementGLF_dead10sum_index, 0, 9 - 1)] += mat3x2(1.0)[GLF_dead10c][GLF_dead10r];
           case 4:
           donor_replacementGLF_dead10sums[clamp(donor_replacementGLF_dead10sum_index, 0, 9 - 1)] += mat3(1.0)[GLF_dead10c][GLF_dead10r];
           case 5:
           donor_replacementGLF_dead10sums[clamp(donor_replacementGLF_dead10sum_index, 0, 9 - 1)] += mat3x4(1.0)[GLF_dead10c][GLF_dead10r];
           case 6:
           donor_replacementGLF_dead10sums[clamp(donor_replacementGLF_dead10sum_index, 0, 9 - 1)] += mat4x2(1.0)[GLF_dead10c][GLF_dead10r];
           case 7:
           donor_replacementGLF_dead10sums[clamp(donor_replacementGLF_dead10sum_index, 0, 9 - 1)] += mat4x3(1.0)[GLF_dead10c][GLF_dead10r];
           case 8:
           donor_replacementGLF_dead10sums[clamp(donor_replacementGLF_dead10sum_index, 0, 9 - 1)] += mat4(1.0)[GLF_dead10c][GLF_dead10r];
          }
        }
      }
    }
  }
 return 1.0;
}
void main()
{
 compute_value();
}
