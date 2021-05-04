#version 320 es

#ifndef REDUCER
#define _GLF_ZERO(X, Y)                   (Y)
#define _GLF_ONE(X, Y)                    (Y)
#define _GLF_FALSE(X, Y)                  (Y)
#define _GLF_TRUE(X, Y)                   (Y)
#define _GLF_IDENTITY(X, Y)               (Y)
#define _GLF_DEAD(X)                      (X)
#define _GLF_FUZZED(X)                    (X)
#define _GLF_WRAPPED_LOOP(X)              X
#define _GLF_WRAPPED_IF_TRUE(X)           X
#define _GLF_WRAPPED_IF_FALSE(X)          X
#define _GLF_SWITCH(X)                    X
#define _GLF_MAKE_IN_BOUNDS_INT(IDX, SZ)  clamp(IDX, 0, SZ - 1)
#define _GLF_MAKE_IN_BOUNDS_UINT(IDX, SZ) clamp(IDX, 0u, SZ - 1u)
#endif

// END OF GENERATED HEADER
precision highp float;

struct _GLF_struct_9 {
 bvec4 _f0;
 ivec4 _f1;
 vec3 _f2;
 mat2 _f3;
} ;

struct _GLF_struct_8 {
 mat4x2 _f0;
} ;

struct _GLF_struct_6 {
 bvec4 _f0;
 ivec4 _f1;
 vec3 _f2;
 mat2x4 _f3;
} ;

struct _GLF_struct_5 {
 mat4 _f0;
 mat2x3 _f1;
 uint _f2;
} ;

struct _GLF_struct_7 {
 uvec4 _f0;
 mat2 _f1;
 int _f2;
 _GLF_struct_5 _f3;
 _GLF_struct_6 _f4;
} ;

struct _GLF_struct_10 {
 bvec4 _f0;
 bool _f1;
 _GLF_struct_7 _f2;
 vec2 coord3;
 _GLF_struct_8 _f3;
 _GLF_struct_9 _f4;
 bvec4 _f5;
} ;

struct _GLF_struct_2 {
 bvec4 _f0;
} ;

struct _GLF_struct_1 {
 mat3x2 _f0;
 mat3x2 _f1;
 vec2 coord1;
 vec3 _f2;
 int _f3;
} ;

struct _GLF_struct_3 {
 _GLF_struct_1 _f0;
 float _f1;
 bvec2 _f2;
 _GLF_struct_2 _f3;
 bool _f4;
} ;

struct _GLF_struct_4 {
 vec2 _f0;
 _GLF_struct_3 _f1;
 mat4 _f2;
 mat4 _f3;
} ;

struct _GLF_struct_0 {
 float pi;
 bvec3 _f0;
} ;

layout(push_constant) uniform buf_push {
 highp vec2 injectionSwitch;
};
layout(location = 0) out vec4 _GLF_color;

layout(set = 0, binding = 0) uniform sampler2D tex;

float ReallyApproxNormalizedAtan2(vec2 v)
{
 float pi2 = 1.0 / (355.0 / 113.0);
 if(_GLF_DEAD(_GLF_IDENTITY(false, (false) && true)))
  return 1.0;
 if(_GLF_WRAPPED_IF_TRUE(true))
  {
   do
    {
     if(_GLF_WRAPPED_IF_FALSE(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
      {
      }
     else
      {
       if(_GLF_DEAD(false))
        return 1.0;
      }
    }
   while(_GLF_WRAPPED_LOOP(_GLF_FALSE(false, (gl_FragCoord.x < _GLF_ZERO(0.0, injectionSwitch.x)))));
  }
 else
  {
  }
 if(_GLF_DEAD(false))
  return 1.0;
 if(length(v) < 0.001)
  {
   do
    {
     if(_GLF_WRAPPED_IF_FALSE(false))
      {
      }
     else
      {
       for(int _injected_loop_counter = 0; _GLF_WRAPPED_LOOP(_injected_loop_counter != 1); _injected_loop_counter ++)
        {
         if(_GLF_WRAPPED_IF_FALSE(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
          {
          }
         else
          {
           if(_GLF_WRAPPED_IF_FALSE(_GLF_FALSE(false, (gl_FragCoord.y < _GLF_ZERO(0.0, injectionSwitch.x)))))
            {
             if(_GLF_DEAD(false))
              return 1.0;
            }
           else
            {
             for(int _injected_loop_counter = 1; _GLF_WRAPPED_LOOP(_injected_loop_counter != 0); _injected_loop_counter --)
              {
               if(_GLF_DEAD(false))
                return 1.0;
              }
             for(int _injected_loop_counter = 0; _GLF_WRAPPED_LOOP(_injected_loop_counter < 1); _injected_loop_counter ++)
              {
               if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
                return 1.0;
              }
             if(_GLF_DEAD(false))
              {
               if(_GLF_WRAPPED_IF_FALSE(_GLF_FALSE(false, (gl_FragCoord.x < tan(0.0)))))
                {
                }
               else
                {
                 return 1.0;
                }
              }
             if(_GLF_WRAPPED_IF_TRUE(true))
              {
               if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
                return 1.0;
              }
             else
              {
              }
            }
          }
        }
      }
    }
   while(_GLF_WRAPPED_LOOP(false));
   for(int _injected_loop_counter = ((1 << _GLF_IDENTITY(int(0), _GLF_IDENTITY(int(0), (int(0)) - 0))) >> _GLF_IDENTITY(int(0), int(0))); _GLF_WRAPPED_LOOP(_injected_loop_counter != 0); _injected_loop_counter --)
    {
     if(_GLF_WRAPPED_IF_FALSE(false))
      {
       for(int _injected_loop_counter = 0; _GLF_WRAPPED_LOOP(_injected_loop_counter != ((1 << _GLF_IDENTITY(int(5), int(5))) >> _GLF_IDENTITY(int(5), _GLF_IDENTITY(int(5), clamp(int(5), int(5), int(5)))))); _injected_loop_counter ++)
        {
         for(int _injected_loop_counter = 1; _GLF_WRAPPED_LOOP(_injected_loop_counter > int(_GLF_ZERO(0.0, injectionSwitch.x))); _injected_loop_counter --)
          {
           if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
            return 1.0;
          }
        }
      }
     else
      {
       return 0.0;
      }
    }
   if(_GLF_DEAD(false))
    {
     if(_GLF_WRAPPED_IF_TRUE(true))
      {
       do
        {
         return 1.0;
        }
       while(_GLF_WRAPPED_LOOP(false));
      }
     else
      {
      }
    }
  }
 if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
  return 1.0;
 vec2 a = abs(v);
 if(_GLF_DEAD(false))
  {
   if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
    {
     do
      {
       if(_GLF_WRAPPED_IF_FALSE(false))
        {
         if(_GLF_DEAD(_GLF_IDENTITY(false, false || (false))))
          continue;
         if(_GLF_WRAPPED_IF_FALSE(false))
          {
          }
         else
          {
           if(_GLF_WRAPPED_IF_FALSE(false))
            {
            }
           else
            {
             if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (injectionSwitch.x < injectionSwitch.y))))
              {
               if(_GLF_DEAD(false))
                {
                 do
                  {
                   discard;
                  }
                 while(_GLF_WRAPPED_LOOP(false));
                }
              }
             else
              {
              }
            }
           if(_GLF_DEAD(false))
            return 1.0;
          }
         if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
          discard;
        }
       else
        {
         do
          {
           if(_GLF_WRAPPED_IF_FALSE(false))
            {
            }
           else
            {
             if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.y >= _GLF_IDENTITY(0.0, 1.0 * (0.0))))))
              {
               return 1.0;
              }
             else
              {
              }
            }
          }
         while(_GLF_WRAPPED_LOOP(false));
         if(_GLF_DEAD(false))
          {
           do
            {
             if(_GLF_WRAPPED_IF_TRUE(true))
              {
               return 1.0;
              }
             else
              {
              }
            }
           while(_GLF_WRAPPED_LOOP(false));
          }
         do
          {
           if(_GLF_DEAD(false))
            return 1.0;
          }
         while(_GLF_WRAPPED_LOOP(false));
         if(_GLF_WRAPPED_IF_FALSE(false))
          {
          }
         else
          {
           if(_GLF_DEAD(false))
            {
             if(_GLF_WRAPPED_IF_FALSE(false))
              {
              }
             else
              {
               return 1.0;
              }
            }
          }
        }
      }
     while(_GLF_WRAPPED_LOOP(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))));
     if(_GLF_DEAD(false))
      {
       if(_GLF_WRAPPED_IF_FALSE(false))
        {
        }
       else
        {
         return 1.0;
        }
      }
     if(_GLF_DEAD(false))
      return 1.0;
    }
   if(_GLF_WRAPPED_IF_FALSE(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
    {
    }
   else
    {
     for(int _injected_loop_counter = int(_GLF_ONE(1.0, injectionSwitch.y)); _GLF_WRAPPED_LOOP(_injected_loop_counter > (1 ^ 1)); _injected_loop_counter --)
      {
       do
        {
         if(_GLF_WRAPPED_IF_FALSE(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
          {
           if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < tan(0.0)))))
            discard;
          }
         else
          {
           if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
            break;
           do
            {
             return 1.0;
            }
           while(_GLF_WRAPPED_LOOP(_GLF_FALSE(false, (gl_FragCoord.x < sin(_GLF_IDENTITY(dot(vec4(1.0, 1.0, 1.0, 1.0), vec4(0.0, 0.0, 0.0, 0.0)), dot(vec4(1.0, 1.0, 1.0, 1.0), vec4(0.0, 0.0, 0.0, 0.0))))))));
          }
        }
       while(_GLF_WRAPPED_LOOP(false));
      }
     if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
      return 1.0;
     if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (injectionSwitch.x < injectionSwitch.y))))
      {
       if(_GLF_WRAPPED_IF_TRUE(true))
        {
         do
          {
           if(_GLF_DEAD(false))
            {
             do
              {
               if(_GLF_DEAD(_GLF_IDENTITY(false, ! (_GLF_IDENTITY(! (false), bool(bvec2(! (false), true)))))))
                {
                 for(int _injected_loop_counter = 0; _GLF_WRAPPED_LOOP(_injected_loop_counter < 1); _injected_loop_counter ++)
                  {
                   return 1.0;
                  }
                }
              }
             while(_GLF_WRAPPED_LOOP(false));
             return 1.0;
            }
          }
         while(_GLF_WRAPPED_LOOP(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))));
         if(_GLF_DEAD(false))
          return 1.0;
         do
          {
           if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
            {
             if(_GLF_WRAPPED_IF_FALSE(_GLF_FALSE(false, (gl_FragCoord.y < sqrt(0.0)))))
              {
              }
             else
              {
               if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (injectionSwitch.x < injectionSwitch.y))))
                {
                 do
                  {
                   if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
                    return 1.0;
                  }
                 while(_GLF_WRAPPED_LOOP(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))));
                 do
                  {
                   return 1.0;
                  }
                 while(_GLF_WRAPPED_LOOP(false));
                 do
                  {
                   if(_GLF_DEAD(false))
                    return 1.0;
                  }
                 while(_GLF_WRAPPED_LOOP(false));
                 if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
                  return 1.0;
                }
               else
                {
                }
              }
            }
          }
         while(_GLF_WRAPPED_LOOP(false));
        }
       else
        {
         if(_GLF_DEAD(false))
          {
           if(_GLF_WRAPPED_IF_TRUE(true))
            {
             if(_GLF_DEAD(false))
              return 1.0;
            }
           else
            {
            }
           return 1.0;
          }
         if(_GLF_DEAD(false))
          return 1.0;
        }
      }
     else
      {
      }
     for(int _injected_loop_counter = 1; _GLF_WRAPPED_LOOP(_injected_loop_counter != (0 << _GLF_IDENTITY(int(8), int(8)))); _injected_loop_counter --)
      {
       for(int _injected_loop_counter = _GLF_IDENTITY(0, (true ? 0 : _GLF_FUZZED(41287))); _GLF_WRAPPED_LOOP(_injected_loop_counter < int(_GLF_ONE(1.0, injectionSwitch.y))); _injected_loop_counter ++)
        {
         if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
          {
           if(_GLF_WRAPPED_IF_FALSE(false))
            {
            }
           else
            {
             if(_GLF_WRAPPED_IF_FALSE(false))
              {
              }
             else
              {
               return 1.0;
              }
            }
          }
        }
      }
    }
  }
 do
  {
   if(_GLF_WRAPPED_IF_FALSE(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
    {
    }
   else
    {
     if(_GLF_WRAPPED_IF_TRUE(true))
      {
       if(_GLF_DEAD(false))
        break;
       if(_GLF_WRAPPED_IF_TRUE(true))
        {
         if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
          return 1.0;
         if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
          continue;
        }
       else
        {
        }
       if(_GLF_DEAD(false))
        break;
      }
     else
      {
      }
    }
  }
 while(_GLF_WRAPPED_LOOP(false));
 float z;
 if(_GLF_WRAPPED_IF_FALSE(false))
  {
   if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
    return 1.0;
  }
 else
  {
   if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.x >= length(vec3(0.0, 0.0, 0.0))))))
    {
     if(_GLF_DEAD(false))
      {
       do
        {
         return 1.0;
        }
       while(_GLF_WRAPPED_LOOP(false));
      }
     if(_GLF_DEAD(false))
      return 1.0;
     if(_GLF_WRAPPED_IF_FALSE(false))
      {
      }
     else
      {
       for(int _injected_loop_counter = 0; _GLF_WRAPPED_LOOP(_injected_loop_counter != ((1 << _GLF_IDENTITY(int(2), _GLF_IDENTITY(int(2), 0 | (int(2))))) >> _GLF_IDENTITY(int(2), int(2)))); _injected_loop_counter ++)
        {
         if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
          break;
         for(int _injected_loop_counter = (0 | 0); _GLF_WRAPPED_LOOP(_injected_loop_counter != 1); _injected_loop_counter ++)
          {
           if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
            {
             if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
              discard;
             return 1.0;
            }
          }
        }
      }
     for(int _injected_loop_counter = (0 >> _GLF_IDENTITY(int(8), int(8))); _GLF_WRAPPED_LOOP(_injected_loop_counter != int(_GLF_ONE(1.0, injectionSwitch.y))); _injected_loop_counter ++)
      {
       for(int _injected_loop_counter = int(_GLF_ZERO(0.0, injectionSwitch.x)); _GLF_WRAPPED_LOOP(_injected_loop_counter != 1); _injected_loop_counter ++)
        {
         if(_GLF_WRAPPED_IF_FALSE(false))
          {
           if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
            return 1.0;
           if(_GLF_DEAD(_GLF_IDENTITY(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y)), false || (_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))))
            break;
          }
         else
          {
           if(_GLF_WRAPPED_IF_FALSE(_GLF_FALSE(false, (gl_FragCoord.y < _GLF_ZERO(0.0, injectionSwitch.x)))))
            {
            }
           else
            {
             if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
              {
               if(_GLF_DEAD(false))
                continue;
               do
                {
                 if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
                  {
                   if(_GLF_DEAD(false))
                    discard;
                   break;
                  }
                 discard;
                }
               while(_GLF_WRAPPED_LOOP(false));
              }
             if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
              break;
            }
           if(_GLF_WRAPPED_IF_FALSE(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
            {
             if(_GLF_DEAD(false))
              {
               if(_GLF_DEAD(false))
                continue;
               do
                {
                 for(int _injected_loop_counter = 1; _GLF_WRAPPED_LOOP(_injected_loop_counter > 0); _injected_loop_counter --)
                  {
                   for(int _injected_loop_counter = int(_GLF_ZERO(0.0, injectionSwitch.x)); _GLF_WRAPPED_LOOP(_injected_loop_counter != ((1 << _GLF_IDENTITY(int(7), int(7))) >> _GLF_IDENTITY(int(7), _GLF_IDENTITY(int(7), int(_GLF_IDENTITY(ivec4(int(7), 1, int(_GLF_ZERO(0.0, injectionSwitch.x)), 0), (ivec4(int(7), 1, int(_GLF_ZERO(0.0, injectionSwitch.x)), 0)) | ivec4(0, 0, 0, 0))))))); _injected_loop_counter ++)
                    {
                     if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
                      continue;
                     if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
                      continue;
                     if(_GLF_WRAPPED_IF_FALSE(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
                      {
                      }
                     else
                      {
                       if(_GLF_WRAPPED_IF_TRUE(true))
                        {
                         discard;
                         if(_GLF_DEAD(false))
                          {
                           if(_GLF_DEAD(false))
                            discard;
                           break;
                          }
                        }
                       else
                        {
                        }
                       if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
                        break;
                       if(_GLF_WRAPPED_IF_TRUE(true))
                        {
                         if(_GLF_DEAD(false))
                          return 1.0;
                        }
                       else
                        {
                        }
                      }
                     if(_GLF_WRAPPED_IF_FALSE(false))
                      {
                      }
                     else
                      {
                       if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
                        return 1.0;
                      }
                    }
                  }
                }
               while(_GLF_WRAPPED_LOOP(false));
               if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
                {
                 if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.x >= 0.0))))
                  {
                   discard;
                  }
                 else
                  {
                  }
                }
               if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
                {
                 if(_GLF_DEAD(false))
                  return 1.0;
                 break;
                }
              }
             if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
              break;
             if(_GLF_WRAPPED_IF_TRUE(true))
              {
               if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.y >= 0.0))))
                {
                 if(_GLF_WRAPPED_IF_FALSE(false))
                  {
                  }
                 else
                  {
                   if(_GLF_DEAD(false))
                    {
                     do
                      {
                       if(_GLF_WRAPPED_IF_FALSE(false))
                        {
                        }
                       else
                        {
                         discard;
                        }
                      }
                     while(_GLF_WRAPPED_LOOP(_GLF_FALSE(false, (gl_FragCoord.y < _GLF_ZERO(0.0, injectionSwitch.x)))));
                     if(_GLF_DEAD(false))
                      discard;
                    }
                  }
                }
               else
                {
                 if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < sin(0.0)))))
                  break;
                }
              }
             else
              {
              }
            }
           else
            {
             if(a.y > a.x)
              {
               if(_GLF_WRAPPED_IF_FALSE(false))
                {
                }
               else
                {
                 if(_GLF_DEAD(false))
                  {
                   if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.x >= 0.0))))
                    {
                     do
                      {
                       if(_GLF_DEAD(false))
                        return 1.0;
                      }
                     while(_GLF_WRAPPED_LOOP(false));
                     return 1.0;
                    }
                   else
                    {
                     if(_GLF_DEAD(false))
                      continue;
                     if(_GLF_DEAD(false))
                      break;
                    }
                  }
                }
               if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
                break;
               if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (injectionSwitch.x < injectionSwitch.y))))
                {
                 if(_GLF_DEAD(false))
                  discard;
                 if(_GLF_WRAPPED_IF_TRUE(true))
                  {
                   if(_GLF_WRAPPED_IF_FALSE(false))
                    {
                    }
                   else
                    {
                     do
                      {
                       if(_GLF_DEAD(false))
                        {
                         if(_GLF_DEAD(false))
                          return 1.0;
                         continue;
                        }
                       do
                        {
                         for(int _injected_loop_counter = (0 >> _GLF_IDENTITY(int(5), int(5))); _GLF_WRAPPED_LOOP(_injected_loop_counter != 1); _injected_loop_counter ++)
                          {
                           if(_GLF_DEAD(false))
                            return 1.0;
                           z = a.x / a.y;
                          }
                        }
                       while(_GLF_WRAPPED_LOOP(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))));
                       if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < log(1.0)))))
                        {
                         if(_GLF_DEAD(false))
                          {
                           for(int _injected_loop_counter = 1; _GLF_WRAPPED_LOOP(_injected_loop_counter > 0); _injected_loop_counter --)
                            {
                             discard;
                            }
                          }
                         discard;
                        }
                       if(_GLF_DEAD(false))
                        continue;
                      }
                     while(_GLF_WRAPPED_LOOP(false));
                     if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
                      break;
                    }
                  }
                 else
                  {
                  }
                }
               else
                {
                }
               if(_GLF_DEAD(false))
                continue;
              }
             else
              {
               if(_GLF_DEAD(false))
                continue;
               if(_GLF_DEAD(false))
                continue;
               if(_GLF_DEAD(false))
                {
                 if(_GLF_WRAPPED_IF_FALSE(_GLF_FALSE(false, (gl_FragCoord.y < _GLF_ZERO(0.0, injectionSwitch.x)))))
                  {
                  }
                 else
                  {
                   if(_GLF_WRAPPED_IF_FALSE(false))
                    {
                    }
                   else
                    {
                     for(int _injected_loop_counter = 0; _GLF_WRAPPED_LOOP(_injected_loop_counter != int(_GLF_ONE(1.0, injectionSwitch.y))); _injected_loop_counter ++)
                      {
                       if(_GLF_DEAD(false))
                        discard;
                      }
                    }
                  }
                 break;
                }
               if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
                continue;
               if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < determinant(mat4(0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 1.0, _GLF_ZERO(0.0, injectionSwitch.x), 0.0, 0.0, 0.0, 0.0, 1.0, 0.0))))))
                discard;
               if(_GLF_WRAPPED_IF_FALSE(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
                {
                }
               else
                {
                 if(_GLF_DEAD(false))
                  continue;
                 if(_GLF_WRAPPED_IF_TRUE(true))
                  {
                   if(_GLF_WRAPPED_IF_TRUE(true))
                    {
                     if(_GLF_DEAD(false))
                      {
                       do
                        {
                         if(_GLF_DEAD(false))
                          break;
                         do
                          {
                           for(int _injected_loop_counter = (0 << _GLF_IDENTITY(int(1), int(1))); _GLF_WRAPPED_LOOP(_injected_loop_counter != 1); _injected_loop_counter ++)
                            {
                             discard;
                            }
                          }
                         while(_GLF_WRAPPED_LOOP(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))));
                        }
                       while(_GLF_WRAPPED_LOOP(_GLF_FALSE(false, (gl_FragCoord.y < _GLF_IDENTITY(dot(vec4(0.0, 0.0, length(0.0), 0.0), vec4(_GLF_IDENTITY(dot(vec4(0.0, 0.0, 0.0, 1.0), vec4(0.0, 0.0, 0.0, 1.0)), dot(vec4(0.0, 0.0, 0.0, 1.0), vec4(0.0, 0.0, 0.0, 1.0))), 1.0, 1.0, 1.0)), _GLF_IDENTITY(dot(vec4(0.0, 0.0, length(0.0), 0.0), vec4(_GLF_IDENTITY(dot(vec4(0.0, 0.0, 0.0, 1.0), vec4(0.0, 0.0, 0.0, 1.0)), dot(vec4(0.0, 0.0, 0.0, 1.0), vec4(0.0, 0.0, 0.0, 1.0))), 1.0, 1.0, 1.0)), (true ? dot(vec4(0.0, 0.0, length(0.0), 0.0), vec4(_GLF_IDENTITY(dot(vec4(0.0, 0.0, 0.0, 1.0), vec4(0.0, 0.0, 0.0, 1.0)), dot(vec4(0.0, 0.0, 0.0, 1.0), vec4(0.0, 0.0, 0.0, 1.0))), 1.0, 1.0, 1.0)) : _GLF_FUZZED(-63.98))))))));
                      }
                    }
                   else
                    {
                    }
                   if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
                    {
                     if(_GLF_DEAD(false))
                      continue;
                     if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
                      break;
                     continue;
                    }
                   do
                    {
                     if(_GLF_WRAPPED_IF_FALSE(_GLF_FALSE(false, (gl_FragCoord.x < abs(0.0)))))
                      {
                      }
                     else
                      {
                       for(int _injected_loop_counter = 0; _GLF_WRAPPED_LOOP(_injected_loop_counter != ((1 << _GLF_IDENTITY(int(1), int(1))) >> _GLF_IDENTITY(int(1), int(1)))); _injected_loop_counter ++)
                        {
                         if(_GLF_DEAD(false))
                          {
                           if(_GLF_DEAD(false))
                            {
                             for(int _injected_loop_counter = (0 << _GLF_IDENTITY(int(8), int(8))); _GLF_WRAPPED_LOOP(_injected_loop_counter < 1); _injected_loop_counter ++)
                              {
                               return 1.0;
                              }
                            }
                           if(_GLF_DEAD(false))
                            continue;
                           discard;
                           if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
                            discard;
                           do
                            {
                             if(_GLF_DEAD(false))
                              discard;
                            }
                           while(_GLF_WRAPPED_LOOP(false));
                          }
                        }
                      }
                    }
                   while(_GLF_WRAPPED_LOOP(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))));
                   if(_GLF_WRAPPED_IF_FALSE(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
                    {
                     if(_GLF_WRAPPED_IF_TRUE(_GLF_IDENTITY(_GLF_TRUE(true, (gl_FragCoord.x >= 0.0)), true && (_GLF_IDENTITY(_GLF_TRUE(true, (gl_FragCoord.x >= 0.0)), bool(bvec4(_GLF_TRUE(true, (gl_FragCoord.x >= 0.0)), true, true, false)))))))
                      {
                       if(_GLF_DEAD(false))
                        {
                         if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < abs(0.0)))))
                          break;
                         break;
                        }
                       if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
                        discard;
                       if(_GLF_DEAD(_GLF_IDENTITY(false, _GLF_TRUE(true, (gl_FragCoord.x >= 0.0)) && (_GLF_IDENTITY(false, bool(bvec2(false, false)))))))
                        break;
                       if(_GLF_WRAPPED_IF_FALSE(_GLF_IDENTITY(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y)), (_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))) && true)))
                        {
                        }
                       else
                        {
                         if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < sin(0.0)))))
                          {
                           if(_GLF_WRAPPED_IF_TRUE(true))
                            {
                             if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
                              return 1.0;
                             do
                              {
                               return 1.0;
                              }
                             while(_GLF_WRAPPED_LOOP(false));
                             if(_GLF_WRAPPED_IF_FALSE(false))
                              {
                              }
                             else
                              {
                               if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
                                {
                                 for(int _injected_loop_counter = _GLF_IDENTITY(1, (1) - 0); _GLF_WRAPPED_LOOP(_injected_loop_counter != 0); _injected_loop_counter --)
                                  {
                                   return 1.0;
                                  }
                                }
                              }
                            }
                           else
                            {
                            }
                           if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
                            {
                             if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < sqrt(0.0)))))
                              return 1.0;
                             if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (injectionSwitch.x < injectionSwitch.y))))
                              {
                               return 1.0;
                              }
                             else
                              {
                              }
                            }
                           do
                            {
                             if(_GLF_DEAD(false))
                              {
                               do
                                {
                                 if(_GLF_WRAPPED_IF_FALSE(false))
                                  {
                                  }
                                 else
                                  {
                                   discard;
                                  }
                                 if(_GLF_DEAD(false))
                                  break;
                                }
                               while(_GLF_WRAPPED_LOOP(false));
                              }
                            }
                           while(_GLF_WRAPPED_LOOP(false));
                          }
                        }
                      }
                     else
                      {
                       if(_GLF_DEAD(false))
                        discard;
                      }
                     if(_GLF_DEAD(false))
                      break;
                     if(_GLF_DEAD(false))
                      {
                       for(int _injected_loop_counter = 1; _GLF_WRAPPED_LOOP(_injected_loop_counter != 0); _injected_loop_counter --)
                        {
                         if(_GLF_DEAD(false))
                          discard;
                        }
                       continue;
                      }
                     if(_GLF_DEAD(_GLF_IDENTITY(false, (false) && true)))
                      {
                       if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (injectionSwitch.x < injectionSwitch.y))))
                        {
                         for(int _injected_loop_counter = 0; _GLF_WRAPPED_LOOP(_injected_loop_counter != 1); _injected_loop_counter ++)
                          {
                           if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
                            {
                             if(_GLF_WRAPPED_IF_FALSE(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
                              {
                              }
                             else
                              {
                               if(_GLF_WRAPPED_IF_TRUE(true))
                                {
                                 do
                                  {
                                   if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
                                    return 1.0;
                                  }
                                 while(_GLF_WRAPPED_LOOP(false));
                                }
                               else
                                {
                                }
                              }
                             do
                              {
                               discard;
                              }
                             while(_GLF_WRAPPED_LOOP(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))));
                            }
                          }
                        }
                       else
                        {
                        }
                       if(_GLF_WRAPPED_IF_TRUE(true))
                        {
                         if(_GLF_DEAD(false))
                          discard;
                        }
                       else
                        {
                         if(_GLF_DEAD(false))
                          return 1.0;
                        }
                       for(int _injected_loop_counter = (0 | 0); _GLF_WRAPPED_LOOP(_injected_loop_counter != 1); _injected_loop_counter ++)
                        {
                         do
                          {
                           for(int _injected_loop_counter = int(_GLF_ZERO(0.0, injectionSwitch.x)); _GLF_WRAPPED_LOOP(_injected_loop_counter != int(_GLF_ONE(1.0, injectionSwitch.y))); _injected_loop_counter ++)
                            {
                             if(_GLF_WRAPPED_IF_FALSE(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
                              {
                              }
                             else
                              {
                               if(_GLF_WRAPPED_IF_TRUE(true))
                                {
                                 if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
                                  return 1.0;
                                }
                               else
                                {
                                }
                              }
                            }
                          }
                         while(_GLF_WRAPPED_LOOP(false));
                         for(int _injected_loop_counter = (1 | 0); _GLF_WRAPPED_LOOP(_injected_loop_counter > 0); _injected_loop_counter --)
                          {
                           do
                            {
                             if(_GLF_WRAPPED_IF_TRUE(true))
                              {
                               if(_GLF_DEAD(false))
                                return 1.0;
                              }
                             else
                              {
                              }
                             return 1.0;
                            }
                           while(_GLF_WRAPPED_LOOP(false));
                          }
                        }
                      }
                     if(_GLF_DEAD(false))
                      break;
                    }
                   else
                    {
                     if(_GLF_WRAPPED_IF_FALSE(false))
                      {
                      }
                     else
                      {
                       do
                        {
                         do
                          {
                           do
                            {
                             if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.y >= 0.0))))
                              {
                               if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < length(vec3(0.0, 0.0, 0.0))))))
                                {
                                 if(_GLF_WRAPPED_IF_TRUE(true))
                                  {
                                   do
                                    {
                                     discard;
                                     if(_GLF_DEAD(false))
                                      break;
                                    }
                                   while(_GLF_WRAPPED_LOOP(_GLF_IDENTITY(false, bool(bvec2(false, _GLF_TRUE(true, (gl_FragCoord.x >= 0.0)))))));
                                  }
                                 else
                                  {
                                  }
                                }
                               if(_GLF_DEAD(false))
                                continue;
                               do
                                {
                                 if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.y >= 0.0))))
                                  {
                                   for(int _injected_loop_counter = 0; _GLF_WRAPPED_LOOP(_injected_loop_counter != 1); _injected_loop_counter ++)
                                    {
                                     if(_GLF_DEAD(false))
                                      break;
                                     if(_GLF_WRAPPED_IF_FALSE(false))
                                      {
                                      }
                                     else
                                      {
                                       z = a.y / a.x;
                                      }
                                     for(int _injected_loop_counter = (0 << _GLF_IDENTITY(int(5), _GLF_IDENTITY(int(5), ~ (~ (_GLF_IDENTITY(int(5), max(int(5), int(5)))))))); _GLF_WRAPPED_LOOP(_injected_loop_counter != (1 & 1)); _injected_loop_counter ++)
                                      {
                                       if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < _GLF_IDENTITY(dot(vec2(0.0, 0.0), vec2(1.0, 1.0)), dot(vec2(0.0, 0.0), vec2(1.0, 1.0)))))))
                                        {
                                         if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (injectionSwitch.x < injectionSwitch.y))))
                                          {
                                           discard;
                                          }
                                         else
                                          {
                                          }
                                        }
                                      }
                                    }
                                   if(_GLF_DEAD(false))
                                    continue;
                                  }
                                 else
                                  {
                                   if(_GLF_DEAD(false))
                                    {
                                     if(_GLF_DEAD(false))
                                      return 1.0;
                                     discard;
                                    }
                                  }
                                 if(_GLF_DEAD(_GLF_IDENTITY(false, (false) && true)))
                                  continue;
                                }
                               while(_GLF_WRAPPED_LOOP(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))));
                               if(_GLF_DEAD(false))
                                break;
                              }
                             else
                              {
                              }
                            }
                           while(_GLF_WRAPPED_LOOP(false));
                          }
                         while(_GLF_WRAPPED_LOOP(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))));
                        }
                       while(_GLF_WRAPPED_LOOP(false));
                      }
                    }
                   if(_GLF_DEAD(false))
                    {
                     if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
                      {
                       if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
                        continue;
                       continue;
                      }
                     break;
                    }
                  }
                 else
                  {
                  }
                }
              }
            }
           if(_GLF_DEAD(false))
            break;
           if(_GLF_WRAPPED_IF_FALSE(false))
            {
            }
           else
            {
             do
              {
               if(_GLF_DEAD(false))
                {
                 if(_GLF_WRAPPED_IF_FALSE(false))
                  {
                   if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < sin(0.0)))))
                    return 1.0;
                  }
                 else
                  {
                   discard;
                  }
                 if(_GLF_DEAD(false))
                  break;
                }
               if(_GLF_DEAD(false))
                {
                 if(_GLF_DEAD(false))
                  break;
                 break;
                }
               do
                {
                 if(_GLF_DEAD(false))
                  {
                   for(int _injected_loop_counter = ((1 << _GLF_IDENTITY(int(0), _GLF_IDENTITY(int(0), (int(0)) << 0))) >> _GLF_IDENTITY(int(0), int(0))); _GLF_WRAPPED_LOOP(_injected_loop_counter != 0); _injected_loop_counter --)
                    {
                     if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
                      {
                       if(_GLF_WRAPPED_IF_FALSE(false))
                        {
                        }
                       else
                        {
                         if(_GLF_DEAD(false))
                          continue;
                         do
                          {
                           return 1.0;
                          }
                         while(_GLF_WRAPPED_LOOP(_GLF_FALSE(false, (gl_FragCoord.x < sqrt(0.0)))));
                         if(_GLF_DEAD(false))
                          continue;
                        }
                      }
                     if(_GLF_DEAD(false))
                      discard;
                    }
                   if(_GLF_DEAD(_GLF_IDENTITY(_GLF_FALSE(false, (gl_FragCoord.x < 0.0)), true && (_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))))
                    return 1.0;
                   if(_GLF_DEAD(false))
                    return 1.0;
                   if(_GLF_WRAPPED_IF_FALSE(false))
                    {
                    }
                   else
                    {
                     return 1.0;
                    }
                  }
                }
               while(_GLF_WRAPPED_LOOP(false));
              }
             while(_GLF_WRAPPED_LOOP(false));
             if(_GLF_DEAD(false))
              {
               if(_GLF_DEAD(false))
                break;
               discard;
               if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
                discard;
              }
             if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
              break;
             if(_GLF_WRAPPED_IF_FALSE(false))
              {
              }
             else
              {
               if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
                return 1.0;
              }
             if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
              {
               if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.x >= 0.0))))
                {
                 if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
                  {
                   if(_GLF_WRAPPED_IF_FALSE(false))
                    {
                    }
                   else
                    {
                     if(_GLF_DEAD(false))
                      discard;
                    }
                   if(_GLF_DEAD(false))
                    discard;
                   return 1.0;
                  }
                 if(_GLF_WRAPPED_IF_FALSE(false))
                  {
                  }
                 else
                  {
                   if(_GLF_DEAD(false))
                    {
                     if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
                      break;
                     return 1.0;
                    }
                  }
                 if(_GLF_DEAD(false))
                  continue;
                 if(_GLF_DEAD(false))
                  break;
                 if(_GLF_DEAD(false))
                  {
                   if(_GLF_WRAPPED_IF_TRUE(true))
                    {
                     if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.x >= _GLF_IDENTITY(dot(vec4(0.0, 1.0, 1.0, 1.0), vec4(1.0, 0.0, _GLF_ZERO(0.0, injectionSwitch.x), 0.0)), dot(vec4(0.0, 1.0, 1.0, 1.0), vec4(1.0, 0.0, _GLF_ZERO(0.0, injectionSwitch.x), 0.0)))))))
                      {
                       if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < tan(0.0)))))
                        {
                         if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.y >= sin(0.0)))))
                          {
                           return 1.0;
                          }
                         else
                          {
                          }
                        }
                      }
                     else
                      {
                      }
                    }
                   else
                    {
                    }
                   break;
                  }
                }
               else
                {
                 if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
                  {
                   for(int _injected_loop_counter = 1; _GLF_WRAPPED_LOOP(_injected_loop_counter > 0); _injected_loop_counter --)
                    {
                     if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
                      discard;
                    }
                   break;
                  }
                }
               if(_GLF_DEAD(false))
                {
                 if(_GLF_DEAD(false))
                  continue;
                 discard;
                }
               do
                {
                 if(_GLF_WRAPPED_IF_FALSE(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
                  {
                  }
                 else
                  {
                   if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
                    return 1.0;
                  }
                }
               while(_GLF_WRAPPED_LOOP(false));
               if(_GLF_DEAD(false))
                return 1.0;
               if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < abs(0.0)))))
                discard;
               if(_GLF_DEAD(false))
                continue;
               if(_GLF_WRAPPED_IF_FALSE(false))
                {
                }
               else
                {
                 for(int _injected_loop_counter = 1; _GLF_WRAPPED_LOOP(_injected_loop_counter != 0); _injected_loop_counter --)
                  {
                   do
                    {
                     if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
                      {
                       if(_GLF_DEAD(false))
                        continue;
                       break;
                      }
                     if(_GLF_WRAPPED_IF_TRUE(true))
                      {
                       if(_GLF_WRAPPED_IF_TRUE(true))
                        {
                         return 1.0;
                        }
                       else
                        {
                        }
                      }
                     else
                      {
                      }
                    }
                   while(_GLF_WRAPPED_LOOP(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))));
                  }
                 if(_GLF_DEAD(false))
                  continue;
                 if(_GLF_DEAD(false))
                  continue;
                 if(_GLF_DEAD(false))
                  {
                   if(_GLF_DEAD(false))
                    break;
                   if(_GLF_DEAD(false))
                    continue;
                   if(_GLF_DEAD(_GLF_IDENTITY(false, true && (false))))
                    break;
                   return 1.0;
                  }
                }
              }
             if(_GLF_WRAPPED_IF_FALSE(false))
              {
               if(_GLF_DEAD(false))
                break;
               if(_GLF_DEAD(false))
                return 1.0;
               if(_GLF_DEAD(false))
                continue;
               do
                {
                 if(_GLF_DEAD(false))
                  discard;
                }
               while(_GLF_WRAPPED_LOOP(false));
              }
             else
              {
               if(_GLF_DEAD(false))
                continue;
               for(int _injected_loop_counter = (1 ^ 0); _GLF_WRAPPED_LOOP(_injected_loop_counter > 0); _injected_loop_counter --)
                {
                 if(_GLF_WRAPPED_IF_TRUE(true))
                  {
                   if(_GLF_DEAD(false))
                    return 1.0;
                  }
                 else
                  {
                  }
                }
               if(_GLF_DEAD(false))
                return 1.0;
              }
             if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < log(1.0)))))
              break;
            }
           if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
            continue;
          }
         if(_GLF_DEAD(false))
          {
           for(int _injected_loop_counter = 1; _GLF_WRAPPED_LOOP(_injected_loop_counter > 0); _injected_loop_counter --)
            {
             discard;
            }
          }
        }
      }
     if(_GLF_DEAD(false))
      return 1.0;
     if(_GLF_DEAD(false))
      return 1.0;
    }
   else
    {
     if(_GLF_DEAD(false))
      {
       if(_GLF_WRAPPED_IF_FALSE(false))
        {
        }
       else
        {
         do
          {
           if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
            return 1.0;
          }
         while(_GLF_WRAPPED_LOOP(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))));
        }
       if(_GLF_WRAPPED_IF_TRUE(true))
        {
         if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
          {
           for(int _injected_loop_counter = 0; _GLF_WRAPPED_LOOP(_injected_loop_counter != (((1 << _GLF_IDENTITY(int(6), int(6))) >> _GLF_IDENTITY(int(6), int(6))) ^ 0)); _injected_loop_counter ++)
            {
             return 1.0;
            }
          }
         if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (injectionSwitch.x < injectionSwitch.y))))
          {
           for(int _injected_loop_counter = 0; _GLF_WRAPPED_LOOP(_injected_loop_counter < ((1 << _GLF_IDENTITY(int(0), int(0))) >> _GLF_IDENTITY(int(0), int(0)))); _injected_loop_counter ++)
            {
             if(_GLF_WRAPPED_IF_TRUE(true))
              {
               return 1.0;
              }
             else
              {
              }
            }
          }
         else
          {
           do
            {
             if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < sqrt(0.0)))))
              continue;
             if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
              {
               for(int _injected_loop_counter = 0; _GLF_WRAPPED_LOOP(_injected_loop_counter < 1); _injected_loop_counter ++)
                {
                 return 1.0;
                }
              }
            }
           while(_GLF_WRAPPED_LOOP(false));
          }
        }
       else
        {
        }
      }
     for(int _injected_loop_counter = 0; _GLF_WRAPPED_LOOP(_injected_loop_counter != ((1 << _GLF_IDENTITY(int(7), _GLF_IDENTITY(int(7), clamp(int(7), _GLF_IDENTITY(int(7), ~ (~ (int(7)))), int(7))))) >> _GLF_IDENTITY(int(7), int(7)))); _injected_loop_counter ++)
      {
       if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.x >= 0.0))))
        {
         if(_GLF_DEAD(false))
          {
           do
            {
             if(_GLF_WRAPPED_IF_FALSE(false))
              {
              }
             else
              {
               if(_GLF_WRAPPED_IF_FALSE(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
                {
                 if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
                  {
                   for(int _injected_loop_counter = 1; _GLF_WRAPPED_LOOP(_injected_loop_counter != ((0 >> _GLF_IDENTITY(int(6), int(6))) >> _GLF_IDENTITY(int(1), int(1)))); _injected_loop_counter --)
                    {
                     do
                      {
                       discard;
                      }
                     while(_GLF_WRAPPED_LOOP(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))));
                    }
                  }
                }
               else
                {
                 do
                  {
                   if(_GLF_DEAD(false))
                    discard;
                  }
                 while(_GLF_WRAPPED_LOOP(false));
                 if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
                  {
                   if(_GLF_WRAPPED_IF_FALSE(false))
                    {
                    }
                   else
                    {
                     discard;
                    }
                  }
                 return 1.0;
                }
              }
             if(_GLF_DEAD(false))
              discard;
            }
           while(_GLF_WRAPPED_LOOP(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))));
          }
        }
       else
        {
        }
      }
     if(_GLF_WRAPPED_IF_TRUE(true))
      {
       if(_GLF_DEAD(false))
        return 1.0;
      }
     else
      {
      }
    }
   if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
    {
     if(_GLF_WRAPPED_IF_FALSE(false))
      {
      }
     else
      {
       for(int _injected_loop_counter = 0; _GLF_WRAPPED_LOOP(_injected_loop_counter != 1); _injected_loop_counter ++)
        {
         return 1.0;
        }
      }
    }
  }
 if(_GLF_DEAD(false))
  return 1.0;
 if(_GLF_WRAPPED_IF_FALSE(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
  {
  }
 else
  {
   if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
    {
     for(int _injected_loop_counter = (0 >> _GLF_IDENTITY(int(6), int(6))); _GLF_WRAPPED_LOOP(_injected_loop_counter < ((1 << _GLF_IDENTITY(int(1), int(1))) >> _GLF_IDENTITY(int(1), int(1)))); _injected_loop_counter ++)
      {
       for(int _injected_loop_counter = 0; _GLF_WRAPPED_LOOP(_injected_loop_counter < 1); _injected_loop_counter ++)
        {
         do
          {
           if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
            discard;
           return 1.0;
          }
         while(_GLF_WRAPPED_LOOP(false));
        }
      }
    }
  }
 if(_GLF_DEAD(false))
  return 1.0;
 if(_GLF_DEAD(false))
  return 1.0;
 float th = (0.97 - 0.19 * z * z) * z * pi2;
 if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (injectionSwitch.x < injectionSwitch.y))))
  {
   if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
    {
     if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.y >= 0.0))))
      {
       return 1.0;
      }
     else
      {
      }
    }
  }
 else
  {
  }
 do
  {
   if(_GLF_WRAPPED_IF_FALSE(false))
    {
    }
   else
    {
     if(a.y < a.x)
      {
       if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
        return 1.0;
       do
        {
         if(_GLF_WRAPPED_IF_FALSE(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
          {
          }
         else
          {
           do
            {
             if(_GLF_DEAD(false))
              {
               if(_GLF_WRAPPED_IF_FALSE(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
                {
                 if(_GLF_WRAPPED_IF_TRUE(true))
                  {
                   if(_GLF_WRAPPED_IF_FALSE(false))
                    {
                    }
                   else
                    {
                     if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
                      discard;
                     if(_GLF_DEAD(false))
                      break;
                    }
                   if(_GLF_DEAD(false))
                    return 1.0;
                   if(_GLF_DEAD(false))
                    discard;
                  }
                 else
                  {
                   if(_GLF_WRAPPED_IF_FALSE(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
                    {
                    }
                   else
                    {
                     if(_GLF_WRAPPED_IF_TRUE(true))
                      {
                       for(int _injected_loop_counter = 1; _GLF_WRAPPED_LOOP(_injected_loop_counter != 0); _injected_loop_counter --)
                        {
                         if(_GLF_WRAPPED_IF_TRUE(true))
                          {
                           if(_GLF_DEAD(false))
                            return 1.0;
                          }
                         else
                          {
                          }
                        }
                      }
                     else
                      {
                      }
                    }
                  }
                }
               else
                {
                 return 1.0;
                }
              }
             if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (injectionSwitch.x < injectionSwitch.y))))
              {
               for(int _injected_loop_counter = 1; _GLF_WRAPPED_LOOP(_injected_loop_counter > int(_GLF_ZERO(0.0, injectionSwitch.x))); _injected_loop_counter --)
                {
                 for(int _injected_loop_counter = (0 ^ int(_GLF_ONE(1.0, injectionSwitch.y))); _GLF_WRAPPED_LOOP(_injected_loop_counter > 0); _injected_loop_counter --)
                  {
                   if(_GLF_WRAPPED_IF_TRUE(true))
                    {
                     if(_GLF_DEAD(false))
                      {
                       if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
                        continue;
                       discard;
                      }
                    }
                   else
                    {
                    }
                   if(_GLF_DEAD(false))
                    continue;
                   for(int _injected_loop_counter = 1; _GLF_WRAPPED_LOOP(_injected_loop_counter != 0); _injected_loop_counter --)
                    {
                     if(_GLF_DEAD(false))
                      {
                       do
                        {
                         if(_GLF_WRAPPED_IF_FALSE(false))
                          {
                          }
                         else
                          {
                           if(_GLF_DEAD(false))
                            {
                             for(int _injected_loop_counter = ((1 << _GLF_IDENTITY(int(4), int(4))) >> _GLF_IDENTITY(int(4), int(4))); _GLF_WRAPPED_LOOP(_injected_loop_counter != 0); _injected_loop_counter --)
                              {
                               discard;
                              }
                            }
                          }
                         if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < determinant(mat4(0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 1.0, exp(0.0), 0.0, 0.0, 0.0, 0.0, 1.0, 0.0))))))
                          break;
                         if(_GLF_DEAD(_GLF_IDENTITY(false, (false) && true)))
                          continue;
                         if(_GLF_WRAPPED_IF_FALSE(_GLF_FALSE(false, (gl_FragCoord.x < _GLF_IDENTITY(dot(vec3(1.0, 0.0, 1.0), vec3(0.0, 1.0, 0.0)), dot(vec3(1.0, 0.0, 1.0), vec3(0.0, 1.0, 0.0)))))))
                          {
                          }
                         else
                          {
                           do
                            {
                             discard;
                            }
                           while(_GLF_WRAPPED_LOOP(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))));
                          }
                        }
                       while(_GLF_WRAPPED_LOOP(false));
                      }
                    }
                   if(_GLF_WRAPPED_IF_TRUE(true))
                    {
                     if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
                      {
                       if(_GLF_DEAD(false))
                        {
                         do
                          {
                           do
                            {
                             discard;
                            }
                           while(_GLF_WRAPPED_LOOP(false));
                          }
                         while(_GLF_WRAPPED_LOOP(false));
                        }
                       discard;
                      }
                    }
                   else
                    {
                    }
                   if(_GLF_DEAD(false))
                    break;
                  }
                }
              }
             else
              {
              }
             if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
              {
               if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
                {
                 if(_GLF_WRAPPED_IF_TRUE(_GLF_IDENTITY(true, ! (! (true)))))
                  {
                   if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.x >= 0.0))))
                    {
                     discard;
                    }
                   else
                    {
                    }
                  }
                 else
                  {
                  }
                }
               do
                {
                 if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
                  discard;
                }
               while(_GLF_WRAPPED_LOOP(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))));
               if(_GLF_WRAPPED_IF_FALSE(_GLF_FALSE(false, (gl_FragCoord.x < abs(0.0)))))
                {
                }
               else
                {
                 if(_GLF_DEAD(false))
                  {
                   if(_GLF_WRAPPED_IF_FALSE(false))
                    {
                    }
                   else
                    {
                     for(int _injected_loop_counter = (0 ^ 0); _GLF_WRAPPED_LOOP(_injected_loop_counter != 1); _injected_loop_counter ++)
                      {
                       for(int _injected_loop_counter = int(_GLF_ONE(1.0, injectionSwitch.y)); _GLF_WRAPPED_LOOP(_injected_loop_counter != 0); _injected_loop_counter --)
                        {
                         return 1.0;
                        }
                       if(_GLF_DEAD(false))
                        continue;
                      }
                    }
                   if(_GLF_DEAD(false))
                    return 1.0;
                  }
                }
               if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
                break;
               if(_GLF_DEAD(false))
                {
                 if(_GLF_WRAPPED_IF_FALSE(false))
                  {
                  }
                 else
                  {
                   return 1.0;
                  }
                }
               return 1.0;
              }
             if(_GLF_DEAD(false))
              break;
             if(_GLF_WRAPPED_IF_TRUE(true))
              {
               if(_GLF_WRAPPED_IF_TRUE(true))
                {
                 if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
                  discard;
                }
               else
                {
                }
              }
             else
              {
              }
             if(_GLF_WRAPPED_IF_FALSE(false))
              {
              }
             else
              {
               if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
                discard;
               if(_GLF_DEAD(false))
                {
                 if(_GLF_DEAD(false))
                  return 1.0;
                 if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (injectionSwitch.x < injectionSwitch.y))))
                  {
                   if(_GLF_WRAPPED_IF_TRUE(true))
                    {
                     for(int _injected_loop_counter = 1; _GLF_WRAPPED_LOOP(_injected_loop_counter > ((0 ^ 0) ^ int(_GLF_ZERO(0.0, injectionSwitch.x)))); _injected_loop_counter --)
                      {
                       if(_GLF_DEAD(false))
                        break;
                       do
                        {
                         return 1.0;
                        }
                       while(_GLF_WRAPPED_LOOP(false));
                      }
                     if(_GLF_DEAD(false))
                      continue;
                     if(_GLF_DEAD(false))
                      return 1.0;
                    }
                   else
                    {
                     for(int _injected_loop_counter = (0 << _GLF_IDENTITY(int(0), int(0))); _GLF_WRAPPED_LOOP(_injected_loop_counter != (0 ^ ((1 << _GLF_IDENTITY(int(5), int(5))) >> _GLF_IDENTITY(int(5), int(5))))); _injected_loop_counter ++)
                      {
                       if(_GLF_WRAPPED_IF_TRUE(true))
                        {
                         if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < _GLF_ZERO(0.0, injectionSwitch.x)))))
                          {
                           if(_GLF_WRAPPED_IF_FALSE(false))
                            {
                            }
                           else
                            {
                             return 1.0;
                            }
                          }
                        }
                       else
                        {
                        }
                      }
                    }
                  }
                 else
                  {
                  }
                }
               if(_GLF_DEAD(false))
                continue;
               if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < log(1.0)))))
                continue;
               if(_GLF_WRAPPED_IF_TRUE(true))
                {
                 do
                  {
                   for(int _injected_loop_counter = int(_GLF_ZERO(0.0, injectionSwitch.x)); _GLF_WRAPPED_LOOP(_injected_loop_counter < 1); _injected_loop_counter ++)
                    {
                     if(_GLF_WRAPPED_IF_FALSE(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
                      {
                      }
                     else
                      {
                       for(int _injected_loop_counter = ((1 << _GLF_IDENTITY(int(2), int(2))) >> _GLF_IDENTITY(int(2), int(2))); _GLF_WRAPPED_LOOP(_injected_loop_counter > int(_GLF_ZERO(0.0, injectionSwitch.x))); _injected_loop_counter --)
                        {
                         if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < tan(0.0)))))
                          {
                           for(int _injected_loop_counter = (1 & 1); _GLF_WRAPPED_LOOP(_injected_loop_counter > (0 << _GLF_IDENTITY(int(6), _GLF_IDENTITY(int(6), 0 ^ (_GLF_IDENTITY(int(6), clamp(int(6), int(6), int(6)))))))); _injected_loop_counter --)
                            {
                             do
                              {
                               if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
                                continue;
                               if(_GLF_WRAPPED_IF_FALSE(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
                                {
                                }
                               else
                                {
                                 if(_GLF_DEAD(false))
                                  discard;
                                }
                              }
                             while(_GLF_WRAPPED_LOOP(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))));
                            }
                           if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
                            continue;
                           if(_GLF_DEAD(false))
                            continue;
                           return 1.0;
                          }
                         if(_GLF_DEAD(false))
                          discard;
                         if(_GLF_DEAD(false))
                          continue;
                         for(int _injected_loop_counter = (((1 | 0) << _GLF_IDENTITY(int(3), _GLF_IDENTITY(int(3), int(ivec2(_GLF_IDENTITY(int(3), max(int(3), int(3))), 0))))) >> _GLF_IDENTITY(int(3), int(3))); _GLF_WRAPPED_LOOP(_injected_loop_counter != 0); _injected_loop_counter --)
                          {
                           do
                            {
                             if(_GLF_WRAPPED_IF_TRUE(true))
                              {
                               if(_GLF_WRAPPED_IF_FALSE(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
                                {
                                }
                               else
                                {
                                 if(_GLF_WRAPPED_IF_FALSE(false))
                                  {
                                  }
                                 else
                                  {
                                   th = 0.5 - th;
                                  }
                                }
                              }
                             else
                              {
                              }
                            }
                           while(_GLF_WRAPPED_LOOP(false));
                          }
                        }
                      }
                     if(_GLF_DEAD(false))
                      {
                       if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
                        {
                         if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
                          continue;
                         discard;
                        }
                       if(_GLF_WRAPPED_IF_FALSE(false))
                        {
                        }
                       else
                        {
                         for(int _injected_loop_counter = 1; _GLF_WRAPPED_LOOP(_injected_loop_counter != 0); _injected_loop_counter --)
                          {
                           if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
                            discard;
                          }
                        }
                       if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
                        break;
                       if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.y >= _GLF_IDENTITY(dot(vec2(0.0, 1.0), vec2(1.0, 0.0)), _GLF_IDENTITY(dot(vec2(0.0, 1.0), vec2(1.0, 0.0)), 1.0 * (dot(vec2(0.0, 1.0), vec2(1.0, 0.0)))))))))
                        {
                         if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < determinant(mat2(0.0, 0.0, log(1.0), 0.0))))))
                          return 1.0;
                        }
                       else
                        {
                        }
                       break;
                      }
                    }
                  }
                 while(_GLF_WRAPPED_LOOP(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))));
                }
               else
                {
                }
               if(_GLF_DEAD(false))
                {
                 if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
                  continue;
                 break;
                }
              }
             if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
              {
               do
                {
                 if(_GLF_DEAD(false))
                  discard;
                }
               while(_GLF_WRAPPED_LOOP(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))));
               if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
                break;
               for(int _injected_loop_counter = 0; _GLF_WRAPPED_LOOP(_injected_loop_counter != 1); _injected_loop_counter ++)
                {
                 if(_GLF_WRAPPED_IF_FALSE(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
                  {
                  }
                 else
                  {
                   discard;
                  }
                }
              }
            }
           while(_GLF_WRAPPED_LOOP(_GLF_IDENTITY(false, ! (! (false)))));
          }
        }
       while(_GLF_WRAPPED_LOOP(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))));
      }
    }
  }
 while(_GLF_WRAPPED_LOOP(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))));
 if(_GLF_WRAPPED_IF_TRUE(true))
  {
   do
    {
     if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
      return 1.0;
    }
   while(_GLF_WRAPPED_LOOP(false));
   do
    {
     if(_GLF_DEAD(false))
      discard;
     if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.x >= 0.0))))
      {
       do
        {
         if(_GLF_WRAPPED_IF_FALSE(false))
          {
          }
         else
          {
           for(int _injected_loop_counter = 0; _GLF_WRAPPED_LOOP(_injected_loop_counter != 1); _injected_loop_counter ++)
            {
             do
              {
               do
                {
                 if(_GLF_DEAD(false))
                  {
                   if(_GLF_WRAPPED_IF_TRUE(true))
                    {
                     do
                      {
                       do
                        {
                         for(int _injected_loop_counter = 1; _GLF_WRAPPED_LOOP(_injected_loop_counter != 0); _injected_loop_counter --)
                          {
                           if(_GLF_DEAD(false))
                            {
                             for(int _injected_loop_counter = int(_GLF_ZERO(0.0, injectionSwitch.x)); _GLF_WRAPPED_LOOP(_injected_loop_counter < 1); _injected_loop_counter ++)
                              {
                               discard;
                              }
                            }
                           if(_GLF_WRAPPED_IF_FALSE(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
                            {
                            }
                           else
                            {
                             if(_GLF_DEAD(false))
                              return 1.0;
                             if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
                              return 1.0;
                             do
                              {
                               if(_GLF_WRAPPED_IF_FALSE(false))
                                {
                                }
                               else
                                {
                                 if(_GLF_WRAPPED_IF_FALSE(false))
                                  {
                                  }
                                 else
                                  {
                                   if(_GLF_WRAPPED_IF_FALSE(false))
                                    {
                                     if(_GLF_DEAD(_GLF_IDENTITY(false, true && (false))))
                                      return 1.0;
                                    }
                                   else
                                    {
                                     for(int _injected_loop_counter = 0; _GLF_WRAPPED_LOOP(_injected_loop_counter < 1); _injected_loop_counter ++)
                                      {
                                       if(_GLF_WRAPPED_IF_TRUE(true))
                                        {
                                         return 1.0;
                                        }
                                       else
                                        {
                                        }
                                       if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
                                        continue;
                                      }
                                    }
                                   if(_GLF_DEAD(_GLF_IDENTITY(false, false || (false))))
                                    continue;
                                   if(_GLF_WRAPPED_IF_TRUE(true))
                                    {
                                     if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
                                      {
                                       for(int _injected_loop_counter = 1; _GLF_WRAPPED_LOOP(_injected_loop_counter > 0); _injected_loop_counter --)
                                        {
                                         return 1.0;
                                        }
                                      }
                                    }
                                   else
                                    {
                                    }
                                   if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
                                    continue;
                                  }
                                }
                               for(int _injected_loop_counter = (1 & 1); _GLF_WRAPPED_LOOP(_injected_loop_counter > 0); _injected_loop_counter --)
                                {
                                 if(_GLF_DEAD(false))
                                  {
                                   for(int _injected_loop_counter = (64580 & (0 & -8392)); _GLF_WRAPPED_LOOP(_injected_loop_counter != (1 ^ 0)); _injected_loop_counter ++)
                                    {
                                     return 1.0;
                                    }
                                  }
                                }
                              }
                             while(_GLF_WRAPPED_LOOP(false));
                            }
                           if(_GLF_DEAD(_GLF_IDENTITY(false, (false) && true)))
                            continue;
                          }
                         if(_GLF_WRAPPED_IF_FALSE(false))
                          {
                          }
                         else
                          {
                           if(_GLF_DEAD(false))
                            {
                             do
                              {
                               return 1.0;
                              }
                             while(_GLF_WRAPPED_LOOP(false));
                            }
                          }
                        }
                       while(_GLF_WRAPPED_LOOP(false));
                      }
                     while(_GLF_WRAPPED_LOOP(false));
                     if(_GLF_WRAPPED_IF_FALSE(_GLF_FALSE(false, (gl_FragCoord.y < sin(0.0)))))
                      {
                       if(_GLF_DEAD(false))
                        {
                         if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
                          continue;
                         discard;
                        }
                      }
                     else
                      {
                       if(_GLF_DEAD(_GLF_IDENTITY(false, (false) && true)))
                        discard;
                       if(_GLF_DEAD(false))
                        {
                         if(_GLF_WRAPPED_IF_FALSE(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
                          {
                          }
                         else
                          {
                           discard;
                          }
                        }
                       if(_GLF_DEAD(false))
                        return 1.0;
                       if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < abs(0.0)))))
                        {
                         if(_GLF_DEAD(false))
                          return 1.0;
                         discard;
                        }
                      }
                    }
                   else
                    {
                     if(_GLF_DEAD(_GLF_IDENTITY(false, bool(bvec3(_GLF_IDENTITY(false, (false) || false), false, _GLF_TRUE(true, (gl_FragCoord.y >= 0.0)))))))
                      {
                       do
                        {
                         return 1.0;
                        }
                       while(_GLF_WRAPPED_LOOP(false));
                      }
                     if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
                      {
                       if(_GLF_WRAPPED_IF_FALSE(false))
                        {
                        }
                       else
                        {
                         return 1.0;
                         if(_GLF_DEAD(false))
                          break;
                        }
                      }
                     if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
                      break;
                    }
                  }
                }
               while(_GLF_WRAPPED_LOOP(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))));
              }
             while(_GLF_WRAPPED_LOOP(false));
            }
           if(v.x < 0.0)
            {
             if(_GLF_WRAPPED_IF_TRUE(true))
              {
               if(_GLF_WRAPPED_IF_FALSE(false))
                {
                }
               else
                {
                 if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.x >= 0.0))))
                  {
                   if(_GLF_DEAD(false))
                    {
                     if(_GLF_WRAPPED_IF_FALSE(false))
                      {
                      }
                     else
                      {
                       if(_GLF_WRAPPED_IF_FALSE(false))
                        {
                        }
                       else
                        {
                         if(_GLF_DEAD(false))
                          {
                           if(_GLF_WRAPPED_IF_TRUE(true))
                            {
                             discard;
                            }
                           else
                            {
                            }
                          }
                        }
                      }
                     if(_GLF_WRAPPED_IF_TRUE(true))
                      {
                       if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < sqrt(0.0)))))
                        discard;
                       if(_GLF_WRAPPED_IF_TRUE(true))
                        {
                         if(_GLF_DEAD(false))
                          continue;
                         do
                          {
                           return 1.0;
                          }
                         while(_GLF_WRAPPED_LOOP(false));
                        }
                       else
                        {
                         if(_GLF_DEAD(false))
                          {
                           for(int _injected_loop_counter = 1; _GLF_WRAPPED_LOOP(_injected_loop_counter != 0); _injected_loop_counter --)
                            {
                             discard;
                            }
                          }
                        }
                       if(_GLF_DEAD(false))
                        discard;
                      }
                     else
                      {
                       for(int _injected_loop_counter = 1; _GLF_WRAPPED_LOOP(_injected_loop_counter > int(_GLF_ZERO(0.0, injectionSwitch.x))); _injected_loop_counter --)
                        {
                         if(_GLF_DEAD(false))
                          return 1.0;
                        }
                       if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
                        break;
                      }
                    }
                   if(_GLF_DEAD(false))
                    continue;
                  }
                 else
                  {
                  }
                 if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
                  break;
                }
              }
             else
              {
              }
             if(_GLF_WRAPPED_IF_TRUE(true))
              {
               if(_GLF_WRAPPED_IF_FALSE(false))
                {
                 for(int _injected_loop_counter = int(_GLF_ONE(1.0, injectionSwitch.y)); _GLF_WRAPPED_LOOP(_injected_loop_counter != 0); _injected_loop_counter --)
                  {
                   if(_GLF_DEAD(false))
                    {
                     do
                      {
                       discard;
                      }
                     while(_GLF_WRAPPED_LOOP(false));
                    }
                  }
                 if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
                  break;
                }
               else
                {
                 for(int _injected_loop_counter = 1; _GLF_WRAPPED_LOOP(_injected_loop_counter != (0 | 0)); _injected_loop_counter --)
                  {
                   if(_GLF_WRAPPED_IF_TRUE(_GLF_IDENTITY(true, ! (! (true)))))
                    {
                     for(int _injected_loop_counter = 0; _GLF_WRAPPED_LOOP(_injected_loop_counter != 1); _injected_loop_counter ++)
                      {
                       do
                        {
                         if(_GLF_WRAPPED_IF_TRUE(true))
                          {
                           th = 1.0 - th;
                          }
                         else
                          {
                          }
                         if(_GLF_DEAD(false))
                          return 1.0;
                         do
                          {
                           if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (injectionSwitch.x < injectionSwitch.y))))
                            {
                             if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
                              {
                               if(_GLF_DEAD(false))
                                return 1.0;
                               if(_GLF_WRAPPED_IF_TRUE(true))
                                {
                                 if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
                                  return 1.0;
                                 if(_GLF_WRAPPED_IF_FALSE(_GLF_FALSE(false, (gl_FragCoord.x < abs(0.0)))))
                                  {
                                  }
                                 else
                                  {
                                   discard;
                                  }
                                }
                               else
                                {
                                }
                              }
                            }
                           else
                            {
                            }
                          }
                         while(_GLF_WRAPPED_LOOP(false));
                        }
                       while(_GLF_WRAPPED_LOOP(false));
                      }
                    }
                   else
                    {
                    }
                  }
                }
               if(_GLF_DEAD(false))
                {
                 if(_GLF_WRAPPED_IF_TRUE(true))
                  {
                   for(int _injected_loop_counter = 1; _GLF_WRAPPED_LOOP(_injected_loop_counter > 0); _injected_loop_counter --)
                    {
                     if(_GLF_DEAD(false))
                      continue;
                     do
                      {
                       do
                        {
                         discard;
                        }
                       while(_GLF_WRAPPED_LOOP(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))));
                       if(_GLF_DEAD(false))
                        break;
                      }
                     while(_GLF_WRAPPED_LOOP(_GLF_IDENTITY(false, false || (false))));
                    }
                   if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < determinant(mat4(0.0, log(1.0), 1.0, 1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0))))))
                    {
                     if(_GLF_DEAD(false))
                      break;
                     break;
                    }
                   if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
                    continue;
                  }
                 else
                  {
                   if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < length(vec2(0.0, 0.0))))))
                    break;
                  }
                }
              }
             else
              {
              }
             if(_GLF_DEAD(false))
              {
               if(_GLF_DEAD(false))
                break;
               continue;
              }
             if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < _GLF_IDENTITY(dot(vec4(length(vec2(0.0, 0.0)), 0.0, 1.0, 1.0), vec4(1.0, 1.0, 0.0, 0.0)), dot(vec4(length(vec2(0.0, 0.0)), 0.0, 1.0, 1.0), vec4(1.0, 1.0, 0.0, 0.0)))))))
              {
               if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
                {
                 for(int _injected_loop_counter = 0; _GLF_WRAPPED_LOOP(_injected_loop_counter < 1); _injected_loop_counter ++)
                  {
                   do
                    {
                     return 1.0;
                    }
                   while(_GLF_WRAPPED_LOOP(false));
                  }
                }
               if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
                break;
               for(int _injected_loop_counter = int(_GLF_ONE(1.0, injectionSwitch.y)); _GLF_WRAPPED_LOOP(_injected_loop_counter != int(_GLF_ZERO(0.0, injectionSwitch.x))); _injected_loop_counter --)
                {
                 if(_GLF_DEAD(false))
                  {
                   for(int _injected_loop_counter = (0 >> _GLF_IDENTITY(int(1), int(1))); _GLF_WRAPPED_LOOP(_injected_loop_counter != int(_GLF_ONE(1.0, injectionSwitch.y))); _injected_loop_counter ++)
                    {
                     return 1.0;
                    }
                  }
                }
               if(_GLF_WRAPPED_IF_TRUE(true))
                {
                 do
                  {
                   for(int _injected_loop_counter = int(_GLF_ONE(1.0, injectionSwitch.y)); _GLF_WRAPPED_LOOP(_injected_loop_counter != (-46588 & 0)); _injected_loop_counter --)
                    {
                     if(_GLF_DEAD(false))
                      {
                       if(_GLF_WRAPPED_IF_FALSE(false))
                        {
                        }
                       else
                        {
                         if(_GLF_DEAD(false))
                          {
                           do
                            {
                             return 1.0;
                             if(_GLF_DEAD(false))
                              continue;
                            }
                           while(_GLF_WRAPPED_LOOP(_GLF_IDENTITY(false, bool(bvec2(false, true)))));
                          }
                        }
                       return 1.0;
                      }
                    }
                   if(_GLF_DEAD(false))
                    {
                     do
                      {
                       for(int _injected_loop_counter = int(_GLF_ZERO(0.0, injectionSwitch.x)); _GLF_WRAPPED_LOOP(_injected_loop_counter < (1 & 1)); _injected_loop_counter ++)
                        {
                         return 1.0;
                        }
                      }
                     while(_GLF_WRAPPED_LOOP(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))));
                    }
                  }
                 while(_GLF_WRAPPED_LOOP(false));
                 if(_GLF_WRAPPED_IF_FALSE(false))
                  {
                   if(_GLF_DEAD(false))
                    break;
                   do
                    {
                     if(_GLF_WRAPPED_IF_FALSE(false))
                      {
                      }
                     else
                      {
                       if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (injectionSwitch.x < injectionSwitch.y))))
                        {
                         if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
                          return 1.0;
                        }
                       else
                        {
                        }
                      }
                    }
                   while(_GLF_WRAPPED_LOOP(false));
                   if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
                    return 1.0;
                  }
                 else
                  {
                   if(_GLF_DEAD(false))
                    {
                     for(int _injected_loop_counter = (0 | 0); _GLF_WRAPPED_LOOP(_injected_loop_counter < 1); _injected_loop_counter ++)
                      {
                       return 1.0;
                      }
                    }
                   if(_GLF_DEAD(_GLF_IDENTITY(false, bool(bvec3(false, false, false)))))
                    {
                     if(_GLF_DEAD(false))
                      continue;
                     continue;
                    }
                   if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
                    discard;
                  }
                 if(_GLF_DEAD(false))
                  continue;
                 if(_GLF_DEAD(false))
                  continue;
                 if(_GLF_DEAD(false))
                  discard;
                 do
                  {
                   if(_GLF_WRAPPED_IF_FALSE(false))
                    {
                    }
                   else
                    {
                     if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
                      {
                       if(_GLF_DEAD(false))
                        return 1.0;
                       if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.y >= 0.0))))
                        {
                         if(_GLF_DEAD(false))
                          {
                           if(_GLF_WRAPPED_IF_TRUE(true))
                            {
                             discard;
                            }
                           else
                            {
                            }
                          }
                        }
                       else
                        {
                        }
                       do
                        {
                         for(int _injected_loop_counter = (0 & 75596); _GLF_WRAPPED_LOOP(_injected_loop_counter != 1); _injected_loop_counter ++)
                          {
                           if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
                            discard;
                          }
                        }
                       while(_GLF_WRAPPED_LOOP(false));
                       if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.y >= 0.0))))
                        {
                         for(int _injected_loop_counter = 0; _GLF_WRAPPED_LOOP(_injected_loop_counter < 1); _injected_loop_counter ++)
                          {
                           discard;
                          }
                        }
                       else
                        {
                        }
                      }
                    }
                   if(_GLF_DEAD(false))
                    continue;
                   if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.x >= log(1.0)))))
                    {
                     if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < sqrt(0.0)))))
                      break;
                     if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.x >= sqrt(abs(0.0))))))
                      {
                       if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
                        continue;
                       return 1.0;
                      }
                     else
                      {
                      }
                    }
                   else
                    {
                     if(_GLF_DEAD(false))
                      discard;
                    }
                   if(_GLF_WRAPPED_IF_TRUE(true))
                    {
                     if(_GLF_DEAD(false))
                      {
                       if(_GLF_WRAPPED_IF_FALSE(_GLF_FALSE(false, (gl_FragCoord.y < _GLF_ZERO(0.0, injectionSwitch.x)))))
                        {
                        }
                       else
                        {
                         do
                          {
                           discard;
                          }
                         while(_GLF_WRAPPED_LOOP(false));
                        }
                      }
                    }
                   else
                    {
                    }
                   do
                    {
                     if(_GLF_DEAD(false))
                      {
                       if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.y >= tan(0.0)))))
                        {
                         return 1.0;
                        }
                       else
                        {
                         if(_GLF_DEAD(false))
                          break;
                        }
                       if(_GLF_DEAD(false))
                        discard;
                      }
                     if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
                      {
                       if(_GLF_WRAPPED_IF_TRUE(true))
                        {
                         discard;
                        }
                       else
                        {
                        }
                      }
                    }
                   while(_GLF_WRAPPED_LOOP(false));
                   do
                    {
                     if(_GLF_WRAPPED_IF_TRUE(true))
                      {
                       do
                        {
                         if(_GLF_DEAD(false))
                          {
                           if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (injectionSwitch.x < injectionSwitch.y))))
                            {
                             discard;
                            }
                           else
                            {
                            }
                          }
                        }
                       while(_GLF_WRAPPED_LOOP(false));
                      }
                     else
                      {
                      }
                    }
                   while(_GLF_WRAPPED_LOOP(false));
                   if(_GLF_DEAD(false))
                    break;
                   for(int _injected_loop_counter = 0; _GLF_WRAPPED_LOOP(_injected_loop_counter < (1 | 1)); _injected_loop_counter ++)
                    {
                     if(_GLF_DEAD(false))
                      discard;
                    }
                  }
                 while(_GLF_WRAPPED_LOOP(false));
                }
               else
                {
                 if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
                  continue;
                 if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
                  break;
                }
              }
             if(_GLF_DEAD(false))
              {
               do
                {
                 if(_GLF_DEAD(false))
                  continue;
                 if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
                  discard;
                }
               while(_GLF_WRAPPED_LOOP(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))));
               if(_GLF_DEAD(false))
                {
                 if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
                  {
                   if(_GLF_WRAPPED_IF_FALSE(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
                    {
                    }
                   else
                    {
                     for(int _injected_loop_counter = (0 << _GLF_IDENTITY(int(8), _GLF_IDENTITY(int(8), (_GLF_IDENTITY(int(8), clamp(int(8), int(8), int(8)))) | (int(8))))); _GLF_WRAPPED_LOOP(_injected_loop_counter < 1); _injected_loop_counter ++)
                      {
                       return 1.0;
                      }
                    }
                   if(_GLF_DEAD(false))
                    discard;
                  }
                 do
                  {
                   if(_GLF_WRAPPED_IF_FALSE(false))
                    {
                    }
                   else
                    {
                     if(_GLF_DEAD(false))
                      return 1.0;
                    }
                  }
                 while(_GLF_WRAPPED_LOOP(false));
                 break;
                }
               for(int _injected_loop_counter = (1 | 1); _GLF_WRAPPED_LOOP(_injected_loop_counter != _GLF_IDENTITY(0, int(int(0)))); _injected_loop_counter --)
                {
                 if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
                  {
                   do
                    {
                     return 1.0;
                    }
                   while(_GLF_WRAPPED_LOOP(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))));
                  }
                }
               if(_GLF_WRAPPED_IF_FALSE(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
                {
                 if(_GLF_DEAD(false))
                  break;
                }
               else
                {
                 for(int _injected_loop_counter = 1; _GLF_WRAPPED_LOOP(_injected_loop_counter != 0); _injected_loop_counter --)
                  {
                   for(int _injected_loop_counter = 1; _GLF_WRAPPED_LOOP(_injected_loop_counter != 0); _injected_loop_counter --)
                    {
                     return 1.0;
                    }
                  }
                 if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
                  {
                   if(_GLF_DEAD(false))
                    discard;
                   if(_GLF_WRAPPED_IF_FALSE(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
                    {
                    }
                   else
                    {
                     if(_GLF_WRAPPED_IF_FALSE(_GLF_FALSE(false, (gl_FragCoord.y < _GLF_IDENTITY(dot(vec2(1.0, 1.0), vec2(0.0, tan(0.0))), dot(vec2(1.0, 1.0), vec2(0.0, tan(0.0))))))))
                      {
                      }
                     else
                      {
                       return 1.0;
                      }
                    }
                  }
                 if(_GLF_DEAD(false))
                  break;
                }
              }
             do
              {
               if(_GLF_DEAD(false))
                {
                 if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
                  {
                   if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
                    continue;
                   if(_GLF_WRAPPED_IF_TRUE(true))
                    {
                     if(_GLF_DEAD(false))
                      {
                       do
                        {
                         return 1.0;
                        }
                       while(_GLF_WRAPPED_LOOP(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))));
                      }
                     if(_GLF_WRAPPED_IF_FALSE(false))
                      {
                       if(_GLF_DEAD(false))
                        continue;
                      }
                     else
                      {
                       for(int _injected_loop_counter = 0; _GLF_WRAPPED_LOOP(_injected_loop_counter < (1 & 1)); _injected_loop_counter ++)
                        {
                         if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.y >= 0.0))))
                          {
                           return 1.0;
                          }
                         else
                          {
                          }
                        }
                       if(_GLF_DEAD(false))
                        discard;
                      }
                    }
                   else
                    {
                    }
                  }
                 if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < abs(0.0)))))
                  break;
                 do
                  {
                   if(_GLF_WRAPPED_IF_TRUE(true))
                    {
                     if(_GLF_DEAD(false))
                      return 1.0;
                    }
                   else
                    {
                    }
                   if(_GLF_WRAPPED_IF_FALSE(false))
                    {
                    }
                   else
                    {
                     if(_GLF_DEAD(false))
                      break;
                     return 1.0;
                    }
                  }
                 while(_GLF_WRAPPED_LOOP(_GLF_IDENTITY(false, (_GLF_IDENTITY(false, (false) || false)) && true)));
                }
              }
             while(_GLF_WRAPPED_LOOP(false));
             if(_GLF_DEAD(false))
              {
               if(_GLF_DEAD(false))
                continue;
               if(_GLF_DEAD(false))
                continue;
               do
                {
                 for(int _injected_loop_counter = (0 | int(_GLF_ONE(1.0, injectionSwitch.y))); _GLF_WRAPPED_LOOP(_injected_loop_counter > (1 ^ 1)); _injected_loop_counter --)
                  {
                   return 1.0;
                  }
                }
               while(_GLF_WRAPPED_LOOP(false));
              }
             for(int _injected_loop_counter = (int(_GLF_ZERO(0.0, injectionSwitch.x)) << _GLF_IDENTITY(int(0), int(0))); _GLF_WRAPPED_LOOP(_injected_loop_counter < int(_GLF_ONE(1.0, injectionSwitch.y))); _injected_loop_counter ++)
              {
               if(_GLF_WRAPPED_IF_FALSE(false))
                {
                }
               else
                {
                 if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
                  {
                   if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
                    discard;
                   discard;
                  }
                }
               if(_GLF_WRAPPED_IF_FALSE(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
                {
                }
               else
                {
                 do
                  {
                   if(_GLF_DEAD(false))
                    continue;
                   if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
                    {
                     if(_GLF_WRAPPED_IF_FALSE(false))
                      {
                      }
                     else
                      {
                       if(_GLF_WRAPPED_IF_FALSE(false))
                        {
                        }
                       else
                        {
                         do
                          {
                           do
                            {
                             if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
                              discard;
                             discard;
                            }
                           while(_GLF_WRAPPED_LOOP(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))));
                          }
                         while(_GLF_WRAPPED_LOOP(false));
                        }
                      }
                     if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < determinant(mat3(0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0))))))
                      {
                       if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.x >= sqrt(0.0)))))
                        {
                         if(_GLF_DEAD(false))
                          return 1.0;
                        }
                       else
                        {
                        }
                       return 1.0;
                      }
                    }
                  }
                 while(_GLF_WRAPPED_LOOP(false));
                }
               if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
                {
                 if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
                  break;
                 if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.y >= 0.0))))
                  {
                   if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
                    continue;
                   for(int _injected_loop_counter = (0 ^ ((1 << _GLF_IDENTITY(int(4), int(4))) >> _GLF_IDENTITY(int(4), int(4)))); _GLF_WRAPPED_LOOP(_injected_loop_counter != (0 >> _GLF_IDENTITY(int(4), int(4)))); _injected_loop_counter --)
                    {
                     return 1.0;
                    }
                  }
                 else
                  {
                   if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
                    continue;
                  }
                 if(_GLF_DEAD(false))
                  discard;
                }
               if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
                break;
               if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
                break;
              }
             if(_GLF_DEAD(false))
              {
               if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
                {
                 if(_GLF_WRAPPED_IF_FALSE(false))
                  {
                  }
                 else
                  {
                   if(_GLF_DEAD(false))
                    continue;
                   discard;
                  }
                }
               continue;
              }
            }
           if(_GLF_WRAPPED_IF_TRUE(true))
            {
             if(_GLF_WRAPPED_IF_TRUE(true))
              {
               for(int _injected_loop_counter = 1; _GLF_WRAPPED_LOOP(_injected_loop_counter != int(_GLF_ZERO(0.0, injectionSwitch.x))); _injected_loop_counter --)
                {
                 if(_GLF_WRAPPED_IF_FALSE(false))
                  {
                  }
                 else
                  {
                   if(_GLF_DEAD(false))
                    {
                     do
                      {
                       if(_GLF_WRAPPED_IF_FALSE(false))
                        {
                        }
                       else
                        {
                         if(_GLF_WRAPPED_IF_FALSE(false))
                          {
                          }
                         else
                          {
                           return 1.0;
                          }
                        }
                      }
                     while(_GLF_WRAPPED_LOOP(false));
                    }
                  }
                }
              }
             else
              {
              }
            }
           else
            {
            }
           do
            {
             if(_GLF_WRAPPED_IF_FALSE(false))
              {
              }
             else
              {
               if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
                {
                 for(int _injected_loop_counter = 1; _GLF_WRAPPED_LOOP(_injected_loop_counter != 0); _injected_loop_counter --)
                  {
                   return 1.0;
                  }
                }
              }
            }
           while(_GLF_WRAPPED_LOOP(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))));
          }
        }
       while(_GLF_WRAPPED_LOOP(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))));
      }
     else
      {
      }
    }
   while(_GLF_WRAPPED_LOOP(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))));
  }
 else
  {
  }
 if(_GLF_DEAD(false))
  {
   for(int _injected_loop_counter = 1; _GLF_WRAPPED_LOOP(_injected_loop_counter != int(_GLF_ZERO(0.0, injectionSwitch.x))); _injected_loop_counter --)
    {
     return 1.0;
    }
  }
 do
  {
   if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
    continue;
   if(_GLF_WRAPPED_IF_FALSE(false))
    {
     if(_GLF_DEAD(false))
      break;
    }
   else
    {
     if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < abs(length(vec3(0.0, 0.0, 0.0)))))))
      {
       do
        {
         for(int _injected_loop_counter = 1; _GLF_WRAPPED_LOOP(_injected_loop_counter > (0 << _GLF_IDENTITY(int(6), int(6)))); _injected_loop_counter --)
          {
           if(_GLF_DEAD(false))
            {
             if(_GLF_DEAD(false))
              break;
             continue;
            }
           if(_GLF_WRAPPED_IF_FALSE(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
            {
            }
           else
            {
             return 1.0;
            }
           if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
            {
             if(_GLF_DEAD(false))
              return 1.0;
             for(int _injected_loop_counter = 1; _GLF_WRAPPED_LOOP(_injected_loop_counter != 0); _injected_loop_counter --)
              {
               for(int _injected_loop_counter = 0; _GLF_WRAPPED_LOOP(_injected_loop_counter < int(_GLF_ONE(1.0, injectionSwitch.y))); _injected_loop_counter ++)
                {
                 if(_GLF_WRAPPED_IF_FALSE(false))
                  {
                  }
                 else
                  {
                   return 1.0;
                  }
                }
              }
            }
           if(_GLF_DEAD(false))
            {
             if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
              break;
             break;
            }
          }
        }
       while(_GLF_WRAPPED_LOOP(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))));
       if(_GLF_DEAD(false))
        return 1.0;
      }
     for(int _injected_loop_counter = (((0 ^ 1) << _GLF_IDENTITY(int(5), int(5))) >> _GLF_IDENTITY(int(5), int(5))); _GLF_WRAPPED_LOOP(_injected_loop_counter > int(_GLF_ZERO(0.0, injectionSwitch.x))); _injected_loop_counter --)
      {
       if(_GLF_DEAD(false))
        {
         if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (injectionSwitch.x < injectionSwitch.y))))
          {
           return 1.0;
          }
         else
          {
          }
        }
      }
    }
  }
 while(_GLF_WRAPPED_LOOP(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))));
 for(int _injected_loop_counter = 1; _GLF_WRAPPED_LOOP(_injected_loop_counter != 0); _injected_loop_counter --)
  {
   if(_GLF_WRAPPED_IF_FALSE(false))
    {
    }
   else
    {
     if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
      {
       if(_GLF_WRAPPED_IF_FALSE(false))
        {
        }
       else
        {
         do
          {
           return 1.0;
          }
         while(_GLF_WRAPPED_LOOP(false));
        }
       if(_GLF_DEAD(false))
        return 1.0;
      }
     if(_GLF_WRAPPED_IF_FALSE(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
      {
      }
     else
      {
       if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.y >= 0.0))))
        {
         if(v.y < 0.0)
          {
           if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
            {
             do
              {
               return 1.0;
              }
             while(_GLF_WRAPPED_LOOP(false));
            }
           if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < length(vec3(0.0, 0.0, 0.0))))))
            {
             do
              {
               for(int _injected_loop_counter = 0; _GLF_WRAPPED_LOOP(_injected_loop_counter != 1); _injected_loop_counter ++)
                {
                 if(_GLF_DEAD(false))
                  return 1.0;
                 if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.y >= 0.0))))
                  {
                   if(_GLF_WRAPPED_IF_TRUE(true))
                    {
                     if(_GLF_WRAPPED_IF_FALSE(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
                      {
                      }
                     else
                      {
                       do
                        {
                         do
                          {
                           if(_GLF_DEAD(_GLF_IDENTITY(_GLF_IDENTITY(false, ! (! (false))), false || (_GLF_IDENTITY(_GLF_IDENTITY(false, ! (! (false))), (_GLF_IDENTITY(false, ! (! (false)))) || false)))))
                            {
                             do
                              {
                               if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (injectionSwitch.x < injectionSwitch.y))))
                                {
                                 discard;
                                }
                               else
                                {
                                }
                              }
                             while(_GLF_WRAPPED_LOOP(false));
                            }
                           return 1.0;
                          }
                         while(_GLF_WRAPPED_LOOP(false));
                        }
                       while(_GLF_WRAPPED_LOOP(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))));
                      }
                    }
                   else
                    {
                    }
                   if(_GLF_DEAD(false))
                    continue;
                  }
                 else
                  {
                  }
                }
              }
             while(_GLF_WRAPPED_LOOP(false));
             if(_GLF_WRAPPED_IF_TRUE(true))
              {
               if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
                return 1.0;
              }
             else
              {
              }
             if(_GLF_DEAD(false))
              {
               if(_GLF_WRAPPED_IF_TRUE(true))
                {
                 return 1.0;
                }
               else
                {
                }
              }
            }
           th = - th;
           if(_GLF_WRAPPED_IF_FALSE(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
            {
            }
           else
            {
             if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.y >= 0.0))))
              {
               if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
                {
                 do
                  {
                   do
                    {
                     do
                      {
                       if(_GLF_DEAD(false))
                        return 1.0;
                      }
                     while(_GLF_WRAPPED_LOOP(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))));
                     if(_GLF_WRAPPED_IF_FALSE(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
                      {
                      }
                     else
                      {
                       do
                        {
                         if(_GLF_WRAPPED_IF_FALSE(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
                          {
                          }
                         else
                          {
                           do
                            {
                             do
                              {
                               if(_GLF_WRAPPED_IF_FALSE(false))
                                {
                                }
                               else
                                {
                                 if(_GLF_WRAPPED_IF_TRUE(true))
                                  {
                                   for(int _injected_loop_counter = ((0 & -46489) >> _GLF_IDENTITY(int(2), int(2))); _GLF_WRAPPED_LOOP(_injected_loop_counter != ((1 << _GLF_IDENTITY(int(3), int(3))) >> _GLF_IDENTITY(int(3), int(3)))); _injected_loop_counter ++)
                                    {
                                     return 1.0;
                                    }
                                  }
                                 else
                                  {
                                  }
                                }
                              }
                             while(_GLF_WRAPPED_LOOP(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))));
                            }
                           while(_GLF_WRAPPED_LOOP(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))));
                          }
                        }
                       while(_GLF_WRAPPED_LOOP(false));
                      }
                    }
                   while(_GLF_WRAPPED_LOOP(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))));
                  }
                 while(_GLF_WRAPPED_LOOP(false));
                }
              }
             else
              {
              }
            }
           if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
            return 1.0;
           for(int _injected_loop_counter = 1; _GLF_WRAPPED_LOOP(_injected_loop_counter != _GLF_IDENTITY(int(_GLF_ZERO(0.0, injectionSwitch.x)), 1 * (int(_GLF_ZERO(0.0, injectionSwitch.x))))); _injected_loop_counter --)
            {
             if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
              {
               if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
                {
                 if(_GLF_WRAPPED_IF_TRUE(true))
                  {
                   if(_GLF_WRAPPED_IF_TRUE(true))
                    {
                     if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
                      discard;
                    }
                   else
                    {
                    }
                  }
                 else
                  {
                  }
                 if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
                  break;
                 continue;
                }
               for(int _injected_loop_counter = (0 << _GLF_IDENTITY(int(1), int(1))); _GLF_WRAPPED_LOOP(_injected_loop_counter < int(_GLF_ONE(1.0, injectionSwitch.y))); _injected_loop_counter ++)
                {
                 do
                  {
                   if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
                    {
                     if(_GLF_DEAD(false))
                      break;
                     if(_GLF_DEAD(false))
                      {
                       if(_GLF_DEAD(false))
                        return 1.0;
                       discard;
                      }
                     return 1.0;
                    }
                  }
                 while(_GLF_WRAPPED_LOOP(false));
                }
               if(_GLF_DEAD(false))
                continue;
               if(_GLF_WRAPPED_IF_FALSE(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
                {
                }
               else
                {
                 if(_GLF_WRAPPED_IF_FALSE(_GLF_FALSE(false, (gl_FragCoord.x < length(vec3(0.0, 0.0, 0.0))))))
                  {
                   if(_GLF_DEAD(false))
                    {
                     if(_GLF_WRAPPED_IF_FALSE(_GLF_FALSE(false, (gl_FragCoord.x < determinant(mat4(0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 1.0, 0.0))))))
                      {
                      }
                     else
                      {
                       for(int _injected_loop_counter = 1; _GLF_WRAPPED_LOOP(_injected_loop_counter > 0); _injected_loop_counter --)
                        {
                         return 1.0;
                        }
                      }
                    }
                  }
                 else
                  {
                   if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
                    return 1.0;
                  }
                }
               if(_GLF_WRAPPED_IF_FALSE(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
                {
                }
               else
                {
                 if(_GLF_WRAPPED_IF_FALSE(false))
                  {
                  }
                 else
                  {
                   if(_GLF_WRAPPED_IF_TRUE(true))
                    {
                     return 1.0;
                    }
                   else
                    {
                    }
                  }
                }
               if(_GLF_DEAD(false))
                {
                 if(_GLF_DEAD(false))
                  {
                   if(_GLF_DEAD(false))
                    {
                     do
                      {
                       return 1.0;
                      }
                     while(_GLF_WRAPPED_LOOP(false));
                    }
                   continue;
                  }
                 return 1.0;
                }
              }
             if(_GLF_DEAD(false))
              {
               if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < _GLF_ZERO(0.0, injectionSwitch.x)))))
                break;
               discard;
               if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
                break;
              }
            }
           for(int _injected_loop_counter = ((1 << _GLF_IDENTITY(int(1), int(1))) >> _GLF_IDENTITY(int(1), int(1))); _GLF_WRAPPED_LOOP(_injected_loop_counter != _GLF_IDENTITY((0 | 0), 0 ^ ((0 | 0)))); _injected_loop_counter --)
            {
             if(_GLF_WRAPPED_IF_FALSE(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
              {
               if(_GLF_DEAD(false))
                {
                 do
                  {
                   do
                    {
                     return 1.0;
                    }
                   while(_GLF_WRAPPED_LOOP(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))));
                  }
                 while(_GLF_WRAPPED_LOOP(false));
                }
               if(_GLF_DEAD(false))
                return 1.0;
              }
             else
              {
               if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < abs(_GLF_ZERO(0.0, injectionSwitch.x))))))
                {
                 for(int _injected_loop_counter = 0; _GLF_WRAPPED_LOOP(_injected_loop_counter != 1); _injected_loop_counter ++)
                  {
                   for(int _injected_loop_counter = 0; _GLF_WRAPPED_LOOP(_injected_loop_counter != (1 | 0)); _injected_loop_counter ++)
                    {
                     if(_GLF_WRAPPED_IF_TRUE(_GLF_IDENTITY(true, ! (! (true)))))
                      {
                       if(_GLF_WRAPPED_IF_FALSE(false))
                        {
                        }
                       else
                        {
                         return 1.0;
                         if(_GLF_DEAD(false))
                          return 1.0;
                         if(_GLF_WRAPPED_IF_TRUE(true))
                          {
                           if(_GLF_DEAD(false))
                            {
                             if(_GLF_WRAPPED_IF_TRUE(true))
                              {
                               return 1.0;
                              }
                             else
                              {
                              }
                            }
                          }
                         else
                          {
                          }
                        }
                      }
                     else
                      {
                      }
                    }
                  }
                }
              }
            }
          }
        }
       else
        {
        }
      }
     if(_GLF_WRAPPED_IF_TRUE(true))
      {
       do
        {
         if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
          return 1.0;
        }
       while(_GLF_WRAPPED_LOOP(false));
      }
     else
      {
      }
     if(_GLF_DEAD(false))
      {
       do
        {
         if(_GLF_WRAPPED_IF_FALSE(false))
          {
          }
         else
          {
           return 1.0;
          }
        }
       while(_GLF_WRAPPED_LOOP(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))));
      }
    }
  }
 if(_GLF_DEAD(false))
  {
   for(int _injected_loop_counter = 0; _GLF_WRAPPED_LOOP(_injected_loop_counter < 1); _injected_loop_counter ++)
    {
     if(_GLF_WRAPPED_IF_TRUE(true))
      {
       return 1.0;
      }
     else
      {
       if(_GLF_DEAD(false))
        {
         if(_GLF_WRAPPED_IF_FALSE(false))
          {
          }
         else
          {
           if(_GLF_WRAPPED_IF_TRUE(true))
            {
             discard;
            }
           else
            {
            }
          }
        }
       do
        {
         for(int _injected_loop_counter = 1; _GLF_WRAPPED_LOOP(_injected_loop_counter > _GLF_IDENTITY((int(_GLF_ZERO(0.0, injectionSwitch.x)) >> _GLF_IDENTITY(int(4), _GLF_IDENTITY(int(4), 0 ^ (int(4))))), 0 ^ ((int(_GLF_ZERO(0.0, injectionSwitch.x)) >> _GLF_IDENTITY(int(4), _GLF_IDENTITY(int(4), 0 ^ (int(4)))))))); _injected_loop_counter --)
          {
           do
            {
             if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
              {
               for(int _injected_loop_counter = 0; _GLF_WRAPPED_LOOP(_injected_loop_counter < 1); _injected_loop_counter ++)
                {
                 if(_GLF_WRAPPED_IF_TRUE(true))
                  {
                   return 1.0;
                  }
                 else
                  {
                  }
                }
               if(_GLF_DEAD(false))
                continue;
              }
            }
           while(_GLF_WRAPPED_LOOP(false));
          }
        }
       while(_GLF_WRAPPED_LOOP(false));
       if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
        {
         for(int _injected_loop_counter = int(_GLF_ONE(1.0, injectionSwitch.y)); _GLF_WRAPPED_LOOP(_injected_loop_counter > (0 << _GLF_IDENTITY(int(5), int(5)))); _injected_loop_counter --)
          {
           if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
            {
             for(int _injected_loop_counter = (1 & int(_GLF_ONE(1.0, injectionSwitch.y))); _GLF_WRAPPED_LOOP(_injected_loop_counter != 0); _injected_loop_counter --)
              {
               do
                {
                 for(int _injected_loop_counter = 0; _GLF_WRAPPED_LOOP(_injected_loop_counter < 1); _injected_loop_counter ++)
                  {
                   for(int _injected_loop_counter = 0; _GLF_WRAPPED_LOOP(_injected_loop_counter != ((1 << _GLF_IDENTITY(int(7), _GLF_IDENTITY(int(7), (int(7)) | (int(7))))) >> _GLF_IDENTITY(int(7), int(7)))); _injected_loop_counter ++)
                    {
                     if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
                      {
                       if(_GLF_DEAD(false))
                        continue;
                       return 1.0;
                       if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < length(vec4(0.0, 0.0, 0.0, 0.0))))))
                        return 1.0;
                       if(_GLF_DEAD(false))
                        break;
                      }
                     if(_GLF_WRAPPED_IF_TRUE(true))
                      {
                       if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (injectionSwitch.x < injectionSwitch.y))))
                        {
                         return 1.0;
                         if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (injectionSwitch.x < injectionSwitch.y))))
                          {
                           if(_GLF_WRAPPED_IF_TRUE(_GLF_IDENTITY(true, ! (! (true)))))
                            {
                             if(_GLF_DEAD(false))
                              {
                               for(int _injected_loop_counter = 0; _GLF_WRAPPED_LOOP(_injected_loop_counter != 1); _injected_loop_counter ++)
                                {
                                 return 1.0;
                                }
                              }
                            }
                           else
                            {
                            }
                          }
                         else
                          {
                          }
                        }
                       else
                        {
                        }
                       if(_GLF_DEAD(false))
                        continue;
                      }
                     else
                      {
                      }
                    }
                  }
                }
               while(_GLF_WRAPPED_LOOP(false));
              }
            }
          }
         if(_GLF_DEAD(false))
          {
           if(_GLF_DEAD(false))
            break;
           break;
          }
         if(_GLF_WRAPPED_IF_FALSE(false))
          {
          }
         else
          {
           for(int _injected_loop_counter = 1; _GLF_WRAPPED_LOOP(_injected_loop_counter != (0 ^ 0)); _injected_loop_counter --)
            {
             return 1.0;
            }
           if(_GLF_WRAPPED_IF_TRUE(true))
            {
             if(_GLF_WRAPPED_IF_FALSE(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
              {
              }
             else
              {
               if(_GLF_WRAPPED_IF_TRUE(true))
                {
                 if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.y >= 0.0))))
                  {
                   if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
                    {
                     if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.y >= 0.0))))
                      {
                       if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < tan(0.0)))))
                        return 1.0;
                      }
                     else
                      {
                      }
                     return 1.0;
                    }
                  }
                 else
                  {
                  }
                }
               else
                {
                }
              }
            }
           else
            {
            }
          }
        }
       if(_GLF_DEAD(false))
        discard;
       for(int _injected_loop_counter = 0; _GLF_WRAPPED_LOOP(_injected_loop_counter < 1); _injected_loop_counter ++)
        {
         if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
          {
           if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.y >= 0.0))))
            {
             discard;
            }
           else
            {
            }
          }
         if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
          break;
         if(_GLF_DEAD(false))
          return 1.0;
         do
          {
           for(int _injected_loop_counter = 1; _GLF_WRAPPED_LOOP(_injected_loop_counter > 0); _injected_loop_counter --)
            {
             if(_GLF_WRAPPED_IF_FALSE(false))
              {
              }
             else
              {
               if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.x >= 0.0))))
                {
                 if(_GLF_DEAD(false))
                  return 1.0;
                }
               else
                {
                }
              }
            }
          }
         while(_GLF_WRAPPED_LOOP(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))));
        }
      }
    }
  }
 for(int _injected_loop_counter = 1; _GLF_WRAPPED_LOOP(_injected_loop_counter != 0); _injected_loop_counter --)
  {
   if(_GLF_WRAPPED_IF_TRUE(true))
    {
     for(int _injected_loop_counter = (1 & ((1 << _GLF_IDENTITY(int(1), int(1))) >> _GLF_IDENTITY(int(1), _GLF_IDENTITY(int(1), (int(1)) ^ 0)))); _GLF_WRAPPED_LOOP(_injected_loop_counter > 0); _injected_loop_counter --)
      {
       if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
        {
         if(_GLF_WRAPPED_IF_FALSE(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
          {
          }
         else
          {
           do
            {
             for(int _injected_loop_counter = ((1 << _GLF_IDENTITY(int(6), int(6))) >> _GLF_IDENTITY(int(6), _GLF_IDENTITY(int(6), clamp(int(6), int(6), int(6))))); _GLF_WRAPPED_LOOP(_injected_loop_counter > 0); _injected_loop_counter --)
              {
               do
                {
                 if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
                  {
                   if(_GLF_DEAD(false))
                    discard;
                   return 1.0;
                  }
                 do
                  {
                   if(_GLF_DEAD(false))
                    discard;
                   return 1.0;
                  }
                 while(_GLF_WRAPPED_LOOP(_GLF_FALSE(false, (gl_FragCoord.y < sin(0.0)))));
                }
               while(_GLF_WRAPPED_LOOP(false));
              }
            }
           while(_GLF_WRAPPED_LOOP(false));
          }
         if(_GLF_DEAD(false))
          continue;
        }
      }
     if(_GLF_WRAPPED_IF_FALSE(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
      {
      }
     else
      {
       if(_GLF_DEAD(false))
        return 1.0;
      }
    }
   else
    {
    }
   if(_GLF_DEAD(false))
    continue;
  }
 if(_GLF_WRAPPED_IF_TRUE(true))
  {
   for(int _injected_loop_counter = 1; _GLF_WRAPPED_LOOP(_injected_loop_counter > 0); _injected_loop_counter --)
    {
     if(_GLF_DEAD(false))
      continue;
     if(_GLF_DEAD(false))
      discard;
     if(_GLF_WRAPPED_IF_TRUE(true))
      {
       if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
        {
         for(int _injected_loop_counter = int(_GLF_ZERO(0.0, injectionSwitch.x)); _GLF_WRAPPED_LOOP(_injected_loop_counter != 1); _injected_loop_counter ++)
          {
           discard;
          }
        }
       if(_GLF_DEAD(false))
        return 1.0;
      }
     else
      {
      }
     do
      {
       return th;
      }
     while(_GLF_WRAPPED_LOOP(_GLF_IDENTITY(false, ! (_GLF_IDENTITY(! (false), (! (false)) && true)))));
    }
  }
 else
  {
   if(_GLF_DEAD(false))
    {
     if(_GLF_WRAPPED_IF_TRUE(true))
      {
       return 1.0;
      }
     else
      {
      }
    }
  }
}
vec2 polarize(vec2 coord)
{
 _GLF_struct_0 _GLF_struct_replacement_0 = _GLF_struct_0((355.0 / 113.0), bvec3(true));
 vec2 center = coord - vec2(0.5);
 if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
  return vec2(1.0);
 float dist = length(center);
 float angle = ReallyApproxNormalizedAtan2(center);
 do
  {
   if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.y >= 0.0))))
    {
     if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
      {
       if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.y >= 0.0))))
        {
         if(_GLF_WRAPPED_IF_TRUE(true))
          {
           return vec2(1.0);
          }
         else
          {
          }
        }
       else
        {
        }
      }
     if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (injectionSwitch.x < injectionSwitch.y))))
      {
       if(_GLF_DEAD(false))
        return vec2(1.0);
      }
     else
      {
      }
     if(_GLF_WRAPPED_IF_TRUE(true))
      {
       do
        {
         for(int _injected_loop_counter = (1 ^ 1); _GLF_WRAPPED_LOOP(_injected_loop_counter != int(_GLF_ONE(1.0, injectionSwitch.y))); _injected_loop_counter ++)
          {
           if(_GLF_DEAD(false))
            {
             for(int _injected_loop_counter = 1; _GLF_WRAPPED_LOOP(_injected_loop_counter != (0 << _GLF_IDENTITY(int(0), int(0)))); _injected_loop_counter --)
              {
               return vec2(1.0);
              }
            }
           if(_GLF_WRAPPED_IF_TRUE(true))
            {
             if(_GLF_DEAD(false))
              return vec2(1.0);
             if(_GLF_WRAPPED_IF_TRUE(true))
              {
               if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
                {
                 if(_GLF_WRAPPED_IF_TRUE(true))
                  {
                   if(_GLF_WRAPPED_IF_TRUE(true))
                    {
                     do
                      {
                       if(_GLF_DEAD(false))
                        {
                         if(_GLF_DEAD(_GLF_IDENTITY(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y)), ! (! (_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y)))))))
                          discard;
                         if(_GLF_DEAD(false))
                          break;
                         if(_GLF_WRAPPED_IF_FALSE(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
                          {
                           if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
                            continue;
                          }
                         else
                          {
                           do
                            {
                             return vec2(1.0);
                            }
                           while(_GLF_WRAPPED_LOOP(false));
                          }
                         do
                          {
                           if(_GLF_DEAD(false))
                            return vec2(1.0);
                          }
                         while(_GLF_WRAPPED_LOOP(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))));
                        }
                      }
                     while(_GLF_WRAPPED_LOOP(false));
                    }
                   else
                    {
                    }
                  }
                 else
                  {
                  }
                 if(_GLF_WRAPPED_IF_TRUE(true))
                  {
                   do
                    {
                     if(_GLF_DEAD(false))
                      continue;
                     for(int _injected_loop_counter = (1 ^ 0); _GLF_WRAPPED_LOOP(_injected_loop_counter > int(_GLF_ZERO(0.0, injectionSwitch.x))); _injected_loop_counter --)
                      {
                       if(_GLF_WRAPPED_IF_FALSE(false))
                        {
                        }
                       else
                        {
                         if(_GLF_WRAPPED_IF_FALSE(false))
                          {
                          }
                         else
                          {
                           if(_GLF_DEAD(false))
                            {
                             if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (injectionSwitch.x < injectionSwitch.y))))
                              {
                               do
                                {
                                 do
                                  {
                                   discard;
                                  }
                                 while(_GLF_WRAPPED_LOOP(false));
                                }
                               while(_GLF_WRAPPED_LOOP(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))));
                              }
                             else
                              {
                              }
                             if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
                              break;
                            }
                           if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
                            continue;
                           if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
                            {
                             do
                              {
                               discard;
                              }
                             while(_GLF_WRAPPED_LOOP(false));
                            }
                           if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < _GLF_ZERO(0.0, injectionSwitch.x)))))
                            {
                             if(_GLF_DEAD(false))
                              discard;
                             if(_GLF_DEAD(false))
                              {
                               if(_GLF_DEAD(false))
                                break;
                               if(_GLF_DEAD(false))
                                {
                                 for(int _injected_loop_counter = 0; _GLF_WRAPPED_LOOP(_injected_loop_counter < 1); _injected_loop_counter ++)
                                  {
                                   discard;
                                  }
                                }
                               break;
                              }
                             return vec2(1.0);
                            }
                           if(_GLF_DEAD(false))
                            break;
                          }
                         if(_GLF_WRAPPED_IF_FALSE(false))
                          {
                          }
                         else
                          {
                           if(_GLF_DEAD(false))
                            {
                             if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (injectionSwitch.x < injectionSwitch.y))))
                              {
                               if(_GLF_WRAPPED_IF_TRUE(true))
                                {
                                 return vec2(1.0);
                                }
                               else
                                {
                                }
                              }
                             else
                              {
                              }
                            }
                          }
                         if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
                          break;
                        }
                       if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
                        {
                         if(_GLF_DEAD(false))
                          break;
                         if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
                          break;
                         if(_GLF_DEAD(false))
                          continue;
                         if(_GLF_WRAPPED_IF_TRUE(true))
                          {
                           if(_GLF_WRAPPED_IF_TRUE(true))
                            {
                             if(_GLF_DEAD(false))
                              {
                               if(_GLF_WRAPPED_IF_TRUE(true))
                                {
                                 discard;
                                }
                               else
                                {
                                }
                              }
                            }
                           else
                            {
                            }
                           return vec2(1.0);
                          }
                         else
                          {
                          }
                        }
                       if(_GLF_DEAD(false))
                        return vec2(1.0);
                       if(_GLF_DEAD(false))
                        break;
                       if(_GLF_WRAPPED_IF_TRUE(true))
                        {
                         if(_GLF_DEAD(false))
                          break;
                         if(_GLF_DEAD(false))
                          {
                           if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
                            {
                             if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (injectionSwitch.x < injectionSwitch.y))))
                              {
                               return vec2(1.0);
                               if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < sin(0.0)))))
                                continue;
                              }
                             else
                              {
                              }
                            }
                           return vec2(1.0);
                           if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
                            {
                             for(int _injected_loop_counter = 0; _GLF_WRAPPED_LOOP(_injected_loop_counter != 1); _injected_loop_counter ++)
                              {
                               discard;
                              }
                            }
                          }
                         if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
                          break;
                        }
                       else
                        {
                        }
                       return vec2(1.0);
                       if(_GLF_DEAD(false))
                        {
                         if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
                          {
                           for(int _injected_loop_counter = 1; _GLF_WRAPPED_LOOP(_injected_loop_counter > ((0 >> _GLF_IDENTITY(int(5), int(5))) | 0)); _injected_loop_counter --)
                            {
                             discard;
                            }
                           if(_GLF_DEAD(false))
                            break;
                          }
                         continue;
                        }
                       if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
                        discard;
                       if(_GLF_DEAD(false))
                        break;
                       if(_GLF_DEAD(false))
                        {
                         if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.y >= 0.0))))
                          {
                           if(_GLF_DEAD(false))
                            break;
                           if(_GLF_DEAD(false))
                            discard;
                          }
                         else
                          {
                           if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
                            continue;
                          }
                         for(int _injected_loop_counter = int(_GLF_ZERO(0.0, injectionSwitch.x)); _GLF_WRAPPED_LOOP(_injected_loop_counter < (1 & 1)); _injected_loop_counter ++)
                          {
                           return vec2(1.0);
                          }
                         if(_GLF_DEAD(_GLF_IDENTITY(false, (false) && true)))
                          break;
                        }
                      }
                     do
                      {
                       do
                        {
                         for(int _injected_loop_counter = 1; _GLF_WRAPPED_LOOP(_injected_loop_counter > 0); _injected_loop_counter --)
                          {
                           if(_GLF_DEAD(false))
                            discard;
                          }
                        }
                       while(_GLF_WRAPPED_LOOP(false));
                      }
                     while(_GLF_WRAPPED_LOOP(false));
                    }
                   while(_GLF_WRAPPED_LOOP(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))));
                  }
                 else
                  {
                  }
                }
               if(_GLF_WRAPPED_IF_TRUE(true))
                {
                 do
                  {
                   do
                    {
                     if(_GLF_WRAPPED_IF_TRUE(true))
                      {
                       if(_GLF_DEAD(false))
                        {
                         if(_GLF_WRAPPED_IF_TRUE(true))
                          {
                           do
                            {
                             return vec2(1.0);
                            }
                           while(_GLF_WRAPPED_LOOP(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))));
                          }
                         else
                          {
                          }
                        }
                      }
                     else
                      {
                      }
                    }
                   while(_GLF_WRAPPED_LOOP(false));
                  }
                 while(_GLF_WRAPPED_LOOP(_GLF_FALSE(false, (gl_FragCoord.y < tan(0.0)))));
                }
               else
                {
                }
               if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
                {
                 if(_GLF_WRAPPED_IF_FALSE(false))
                  {
                  }
                 else
                  {
                   discard;
                   if(_GLF_WRAPPED_IF_FALSE(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
                    {
                    }
                   else
                    {
                     if(_GLF_DEAD(false))
                      return vec2(1.0);
                    }
                  }
                }
               if(_GLF_DEAD(false))
                return vec2(1.0);
               if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
                continue;
               if(_GLF_DEAD(_GLF_IDENTITY(false, ! (! (_GLF_IDENTITY(false, false || (false)))))))
                continue;
              }
             else
              {
               if(_GLF_DEAD(false))
                continue;
               if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
                {
                 if(_GLF_WRAPPED_IF_TRUE(true))
                  {
                   if(_GLF_WRAPPED_IF_FALSE(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
                    {
                    }
                   else
                    {
                     if(_GLF_DEAD(false))
                      discard;
                    }
                   do
                    {
                     for(int _injected_loop_counter = 1; _GLF_WRAPPED_LOOP(_injected_loop_counter > (0 >> _GLF_IDENTITY(int(7), int(7)))); _injected_loop_counter --)
                      {
                       return vec2(1.0);
                      }
                    }
                   while(_GLF_WRAPPED_LOOP(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))));
                  }
                 else
                  {
                  }
                 if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
                  continue;
                 for(int _injected_loop_counter = 0; _GLF_WRAPPED_LOOP(_injected_loop_counter < 1); _injected_loop_counter ++)
                  {
                   if(_GLF_DEAD(false))
                    {
                     if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
                      discard;
                     for(int _injected_loop_counter = _GLF_IDENTITY(0, 0 ^ (0)); _GLF_WRAPPED_LOOP(_injected_loop_counter < ((1 << _GLF_IDENTITY(int(2), int(2))) >> _GLF_IDENTITY(int(2), int(2)))); _injected_loop_counter ++)
                      {
                       if(_GLF_WRAPPED_IF_FALSE(false))
                        {
                        }
                       else
                        {
                         return vec2(1.0);
                         if(_GLF_DEAD(_GLF_IDENTITY(false, (false) && _GLF_TRUE(true, (gl_FragCoord.x >= 0.0)))))
                          discard;
                        }
                      }
                    }
                  }
                }
              }
            }
           else
            {
            }
           if(_GLF_DEAD(false))
            break;
          }
        }
       while(_GLF_WRAPPED_LOOP(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))));
      }
     else
      {
       if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < _GLF_ZERO(0.0, injectionSwitch.x)))))
        break;
      }
    }
   else
    {
    }
  }
 while(_GLF_WRAPPED_LOOP(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))));
 for(int _injected_loop_counter = 1; _GLF_WRAPPED_LOOP(_injected_loop_counter != (0 << _GLF_IDENTITY(int(4), int(4)))); _injected_loop_counter --)
  {
   do
    {
     for(int _injected_loop_counter = 0; _GLF_WRAPPED_LOOP(_injected_loop_counter != 1); _injected_loop_counter ++)
      {
       if(_GLF_DEAD(false))
        {
         do
          {
           if(_GLF_WRAPPED_IF_TRUE(true))
            {
             for(int _injected_loop_counter = ((0 << _GLF_IDENTITY(int(1), int(1))) >> _GLF_IDENTITY(int(1), int(1))); _GLF_WRAPPED_LOOP(_injected_loop_counter < int(_GLF_ONE(1.0, injectionSwitch.y))); _injected_loop_counter ++)
              {
               do
                {
                 if(_GLF_DEAD(false))
                  continue;
                 return vec2(1.0);
                 if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
                  break;
                }
               while(_GLF_WRAPPED_LOOP(false));
              }
            }
           else
            {
            }
          }
         while(_GLF_WRAPPED_LOOP(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))));
        }
      }
    }
   while(_GLF_WRAPPED_LOOP(false));
  }
 for(int _injected_loop_counter = 0; _GLF_WRAPPED_LOOP(_injected_loop_counter != 1); _injected_loop_counter ++)
  {
   if(_GLF_WRAPPED_IF_TRUE(true))
    {
     return vec2(dist, angle);
    }
   else
    {
    }
  }
 do
  {
   if(_GLF_DEAD(false))
    return vec2(1.0);
  }
 while(_GLF_WRAPPED_LOOP(false));
 if(_GLF_WRAPPED_IF_FALSE(false))
  {
  }
 else
  {
   if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
    return vec2(1.0);
  }
 do
  {
   do
    {
     if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < tan(0.0)))))
      {
       if(_GLF_WRAPPED_IF_FALSE(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
        {
        }
       else
        {
         if(_GLF_WRAPPED_IF_TRUE(true))
          {
           if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
            return vec2(1.0);
          }
         else
          {
          }
        }
       if(_GLF_WRAPPED_IF_FALSE(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
        {
        }
       else
        {
         return vec2(1.0);
        }
      }
    }
   while(_GLF_WRAPPED_LOOP(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))));
  }
 while(_GLF_WRAPPED_LOOP(false));
 if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (injectionSwitch.x < injectionSwitch.y))))
  {
   if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
    {
     for(int _injected_loop_counter = 0; _GLF_WRAPPED_LOOP(_injected_loop_counter < int(_GLF_ONE(1.0, injectionSwitch.y))); _injected_loop_counter ++)
      {
       return vec2(1.0);
       if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < determinant(mat2(0.0, 0.0, sqrt(1.0), 0.0))))))
        continue;
      }
    }
  }
 else
  {
  }
 do
  {
   if(_GLF_DEAD(false))
    {
     if(_GLF_DEAD(false))
      {
       if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
        {
         if(_GLF_WRAPPED_IF_FALSE(false))
          {
          }
         else
          {
           return vec2(1.0);
          }
        }
       do
        {
         if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
          return vec2(1.0);
        }
       while(_GLF_WRAPPED_LOOP(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))));
       if(_GLF_DEAD(false))
        return vec2(1.0);
       for(int _injected_loop_counter = 1; _GLF_WRAPPED_LOOP(_injected_loop_counter > 0); _injected_loop_counter --)
        {
         if(_GLF_WRAPPED_IF_TRUE(true))
          {
           do
            {
             for(int _injected_loop_counter = int(_GLF_ZERO(0.0, injectionSwitch.x)); _GLF_WRAPPED_LOOP(_injected_loop_counter != ((1 << _GLF_IDENTITY(int(6), int(6))) >> _GLF_IDENTITY(int(6), int(6)))); _injected_loop_counter ++)
              {
               if(_GLF_DEAD(false))
                continue;
               if(_GLF_DEAD(false))
                continue;
               if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.x >= 0.0))))
                {
                 if(_GLF_WRAPPED_IF_FALSE(false))
                  {
                  }
                 else
                  {
                   if(_GLF_DEAD(false))
                    {
                     if(_GLF_WRAPPED_IF_FALSE(_GLF_FALSE(false, (gl_FragCoord.x < _GLF_IDENTITY(dot(vec3(0.0, 1.0, 1.0), vec3(_GLF_ONE(1.0, injectionSwitch.y), 0.0, 0.0)), dot(vec3(0.0, 1.0, 1.0), vec3(_GLF_ONE(1.0, injectionSwitch.y), 0.0, 0.0)))))))
                      {
                      }
                     else
                      {
                       discard;
                      }
                    }
                  }
                }
               else
                {
                }
               return vec2(1.0);
              }
            }
           while(_GLF_WRAPPED_LOOP(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))));
          }
         else
          {
          }
        }
       if(_GLF_DEAD(false))
        break;
       if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
        continue;
      }
     if(_GLF_WRAPPED_IF_TRUE(true))
      {
       if(_GLF_WRAPPED_IF_FALSE(false))
        {
        }
       else
        {
         for(int _injected_loop_counter = int(_GLF_ZERO(0.0, injectionSwitch.x)); _GLF_WRAPPED_LOOP(_injected_loop_counter != 1); _injected_loop_counter ++)
          {
           if(_GLF_DEAD(_GLF_IDENTITY(false, false || (_GLF_IDENTITY(false, (false) || false)))))
            {
             if(_GLF_WRAPPED_IF_FALSE(false))
              {
              }
             else
              {
               if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
                return vec2(1.0);
              }
             do
              {
               if(_GLF_WRAPPED_IF_FALSE(false))
                {
                }
               else
                {
                 if(_GLF_WRAPPED_IF_FALSE(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
                  {
                  }
                 else
                  {
                   do
                    {
                     if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.x >= 0.0))))
                      {
                       return vec2(1.0);
                      }
                     else
                      {
                      }
                    }
                   while(_GLF_WRAPPED_LOOP(false));
                  }
                }
              }
             while(_GLF_WRAPPED_LOOP(false));
            }
           do
            {
             do
              {
               if(_GLF_DEAD(false))
                break;
               if(_GLF_WRAPPED_IF_FALSE(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
                {
                }
               else
                {
                 if(_GLF_WRAPPED_IF_TRUE(true))
                  {
                   return vec2(1.0);
                  }
                 else
                  {
                  }
                }
               if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
                continue;
              }
             while(_GLF_WRAPPED_LOOP(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))));
            }
           while(_GLF_WRAPPED_LOOP(false));
          }
        }
       if(_GLF_WRAPPED_IF_FALSE(false))
        {
        }
       else
        {
         do
          {
           if(_GLF_DEAD(false))
            discard;
          }
         while(_GLF_WRAPPED_LOOP(false));
        }
      }
     else
      {
      }
    }
   if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
    return vec2(1.0);
  }
 while(_GLF_WRAPPED_LOOP(false));
}
void main()
{
 vec2 coord = gl_FragCoord.xy * (1.0 / 256.0);
 for(int _injected_loop_counter = 0; _GLF_WRAPPED_LOOP(_injected_loop_counter != 1); _injected_loop_counter ++)
  {
   if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
    {
     for(int _injected_loop_counter = int(_GLF_ZERO(0.0, injectionSwitch.x)); _GLF_WRAPPED_LOOP(_injected_loop_counter < 1); _injected_loop_counter ++)
      {
       if(_GLF_WRAPPED_IF_TRUE(true))
        {
         return;
        }
       else
        {
        }
      }
    }
  }
 _GLF_struct_4 _GLF_struct_replacement_4 = _GLF_struct_4(vec2(1.0), _GLF_struct_3(_GLF_struct_1(mat3x2(1.0), mat3x2(1.0), polarize(coord + vec2(20.0 / 256.0, - 80.0 / 256.0)), vec3(1.0), 1), 1.0, bvec2(true), _GLF_struct_2(bvec4(true)), true), mat4(1.0), mat4(1.0));
 do
  {
   if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
    return;
  }
 while(_GLF_WRAPPED_LOOP(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))));
 do
  {
   if(_GLF_WRAPPED_IF_TRUE(true))
    {
     if(_GLF_DEAD(false))
      {
       do
        {
         if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.x >= 0.0))))
          {
           return;
          }
         else
          {
          }
        }
       while(_GLF_WRAPPED_LOOP(false));
      }
    }
   else
    {
    }
  }
 while(_GLF_WRAPPED_LOOP(false));
 vec2 coord2 = polarize(coord + vec2(- 60.0 / 256.0, 40.0 / 256.0));
 do
  {
   if(_GLF_WRAPPED_IF_FALSE(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
    {
     if(_GLF_DEAD(false))
      return;
     if(_GLF_WRAPPED_IF_TRUE(_GLF_IDENTITY(_GLF_TRUE(true, (injectionSwitch.x < injectionSwitch.y)), (_GLF_TRUE(true, (injectionSwitch.x < injectionSwitch.y))) && true)))
      {
       do
        {
         if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
          return;
        }
       while(_GLF_WRAPPED_LOOP(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))));
      }
     else
      {
      }
     if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
      return;
    }
   else
    {
     if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < length(sqrt(vec4(0.0, 0.0, 0.0, 0.0)))))))
      {
       if(_GLF_DEAD(false))
        {
         do
          {
           return;
          }
         while(_GLF_WRAPPED_LOOP(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))));
        }
       if(_GLF_WRAPPED_IF_FALSE(_GLF_FALSE(false, (gl_FragCoord.y < sqrt(0.0)))))
        {
        }
       else
        {
         for(int _injected_loop_counter = (1 & 1); _GLF_WRAPPED_LOOP(_injected_loop_counter != 0); _injected_loop_counter --)
          {
           for(int _injected_loop_counter = 0; _GLF_WRAPPED_LOOP(_injected_loop_counter < int(_GLF_ONE(1.0, injectionSwitch.y))); _injected_loop_counter ++)
            {
             do
              {
               if(_GLF_WRAPPED_IF_TRUE(true))
                {
                 return;
                }
               else
                {
                }
              }
             while(_GLF_WRAPPED_LOOP(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))));
            }
          }
        }
       if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
        return;
       if(_GLF_DEAD(false))
        return;
      }
     if(_GLF_DEAD(false))
      {
       do
        {
         return;
        }
       while(_GLF_WRAPPED_LOOP(false));
       if(_GLF_WRAPPED_IF_FALSE(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
        {
        }
       else
        {
         for(int _injected_loop_counter = ((0 | 0) << _GLF_IDENTITY(int(0), int(0))); _GLF_WRAPPED_LOOP(_injected_loop_counter != (0 ^ ((1 << _GLF_IDENTITY(int(0), int(0))) >> _GLF_IDENTITY(int(0), int(0))))); _injected_loop_counter ++)
          {
           if(_GLF_DEAD(false))
            return;
          }
        }
      }
     for(int _injected_loop_counter = _GLF_IDENTITY(1, (1) - 0); _GLF_WRAPPED_LOOP(_injected_loop_counter > 0); _injected_loop_counter --)
      {
       if(_GLF_WRAPPED_IF_FALSE(_GLF_IDENTITY(_GLF_FALSE(false, (gl_FragCoord.y < 0.0)), (_GLF_IDENTITY(_GLF_FALSE(false, (gl_FragCoord.y < 0.0)), ! (! (_GLF_FALSE(false, (gl_FragCoord.y < 0.0)))))) && true)))
        {
        }
       else
        {
         if(_GLF_WRAPPED_IF_FALSE(false))
          {
          }
         else
          {
           if(_GLF_WRAPPED_IF_FALSE(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
            {
            }
           else
            {
             do
              {
               if(_GLF_WRAPPED_IF_FALSE(false))
                {
                }
               else
                {
                 if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
                  {
                   do
                    {
                     if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.x >= sin(0.0)))))
                      {
                       return;
                      }
                     else
                      {
                      }
                    }
                   while(_GLF_WRAPPED_LOOP(false));
                  }
                }
               if(_GLF_WRAPPED_IF_TRUE(true))
                {
                 for(int _injected_loop_counter = 0; _GLF_WRAPPED_LOOP(_injected_loop_counter < 1); _injected_loop_counter ++)
                  {
                   if(_GLF_DEAD(false))
                    break;
                   if(_GLF_DEAD(false))
                    {
                     if(_GLF_DEAD(false))
                      {
                       if(_GLF_DEAD(false))
                        continue;
                       if(_GLF_DEAD(false))
                        break;
                       if(_GLF_WRAPPED_IF_FALSE(false))
                        {
                        }
                       else
                        {
                         do
                          {
                           do
                            {
                             if(_GLF_WRAPPED_IF_TRUE(true))
                              {
                               do
                                {
                                 do
                                  {
                                   for(int _injected_loop_counter = 0; _GLF_WRAPPED_LOOP(_injected_loop_counter != 1); _injected_loop_counter ++)
                                    {
                                     if(_GLF_WRAPPED_IF_TRUE(true))
                                      {
                                       do
                                        {
                                         return;
                                        }
                                       while(_GLF_WRAPPED_LOOP(false));
                                      }
                                     else
                                      {
                                      }
                                    }
                                  }
                                 while(_GLF_WRAPPED_LOOP(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))));
                                }
                               while(_GLF_WRAPPED_LOOP(false));
                              }
                             else
                              {
                              }
                            }
                           while(_GLF_WRAPPED_LOOP(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))));
                          }
                         while(_GLF_WRAPPED_LOOP(false));
                        }
                      }
                     if(_GLF_WRAPPED_IF_FALSE(false))
                      {
                      }
                     else
                      {
                       if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
                        {
                         if(_GLF_DEAD(false))
                          continue;
                         continue;
                        }
                       if(_GLF_DEAD(false))
                        break;
                       do
                        {
                         if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
                          {
                           for(int _injected_loop_counter = (1 | 1); _GLF_WRAPPED_LOOP(_injected_loop_counter != 0); _injected_loop_counter --)
                            {
                             discard;
                            }
                          }
                        }
                       while(_GLF_WRAPPED_LOOP(false));
                       if(_GLF_WRAPPED_IF_FALSE(false))
                        {
                        }
                       else
                        {
                         for(int _injected_loop_counter = int(_GLF_ONE(1.0, injectionSwitch.y)); _GLF_WRAPPED_LOOP(_injected_loop_counter != 0); _injected_loop_counter --)
                          {
                           if(_GLF_WRAPPED_IF_FALSE(false))
                            {
                            }
                           else
                            {
                             if(_GLF_WRAPPED_IF_FALSE(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
                              {
                              }
                             else
                              {
                               if(_GLF_WRAPPED_IF_FALSE(false))
                                {
                                }
                               else
                                {
                                 if(_GLF_WRAPPED_IF_TRUE(true))
                                  {
                                   for(int _injected_loop_counter = int(_GLF_ZERO(0.0, injectionSwitch.x)); _GLF_WRAPPED_LOOP(_injected_loop_counter != (1 | 1)); _injected_loop_counter ++)
                                    {
                                     for(int _injected_loop_counter = 0; _GLF_WRAPPED_LOOP(_injected_loop_counter != 1); _injected_loop_counter ++)
                                      {
                                       if(_GLF_WRAPPED_IF_TRUE(true))
                                        {
                                         if(_GLF_DEAD(false))
                                          return;
                                         if(_GLF_WRAPPED_IF_FALSE(_GLF_FALSE(false, (gl_FragCoord.x < _GLF_ZERO(0.0, injectionSwitch.x)))))
                                          {
                                          }
                                         else
                                          {
                                           if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < determinant(mat4(0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 1.0, 1.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0))))))
                                            {
                                             if(_GLF_WRAPPED_IF_FALSE(false))
                                              {
                                              }
                                             else
                                              {
                                               return;
                                              }
                                            }
                                          }
                                        }
                                       else
                                        {
                                        }
                                       for(int _injected_loop_counter = 0; _GLF_WRAPPED_LOOP(_injected_loop_counter != int(_GLF_ONE(1.0, injectionSwitch.y))); _injected_loop_counter ++)
                                        {
                                         return;
                                        }
                                      }
                                     if(_GLF_DEAD(false))
                                      discard;
                                     if(_GLF_WRAPPED_IF_TRUE(true))
                                      {
                                       if(_GLF_DEAD(_GLF_IDENTITY(false, (false) || false)))
                                        return;
                                       if(_GLF_DEAD(false))
                                        {
                                         for(int _injected_loop_counter = int(_GLF_ONE(1.0, injectionSwitch.y)); _GLF_WRAPPED_LOOP(_injected_loop_counter != 0); _injected_loop_counter --)
                                          {
                                           if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
                                            {
                                             if(_GLF_WRAPPED_IF_FALSE(false))
                                              {
                                              }
                                             else
                                              {
                                               if(_GLF_WRAPPED_IF_FALSE(_GLF_IDENTITY(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y)), bool(bool(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y)))))))
                                                {
                                                }
                                               else
                                                {
                                                 discard;
                                                }
                                              }
                                             if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.x >= sin(0.0)))))
                                              {
                                               if(_GLF_DEAD(false))
                                                return;
                                              }
                                             else
                                              {
                                              }
                                            }
                                          }
                                         if(_GLF_DEAD(false))
                                          {
                                           if(_GLF_DEAD(false))
                                            discard;
                                           continue;
                                          }
                                         if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.y >= 0.0))))
                                          {
                                           for(int _injected_loop_counter = 1; _GLF_WRAPPED_LOOP(_injected_loop_counter != 0); _injected_loop_counter --)
                                            {
                                             discard;
                                            }
                                           if(_GLF_DEAD(false))
                                            break;
                                           if(_GLF_DEAD(false))
                                            {
                                             if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
                                              discard;
                                             continue;
                                            }
                                          }
                                         else
                                          {
                                          }
                                        }
                                       if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
                                        continue;
                                      }
                                     else
                                      {
                                       if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
                                        break;
                                      }
                                    }
                                  }
                                 else
                                  {
                                  }
                                }
                              }
                            }
                          }
                        }
                       for(int _injected_loop_counter = 1; _GLF_WRAPPED_LOOP(_injected_loop_counter > 0); _injected_loop_counter --)
                        {
                         if(_GLF_DEAD(false))
                          return;
                        }
                       if(_GLF_DEAD(false))
                        continue;
                       if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.x >= log(determinant(mat4(1.0, 1.0, 1.0, 0.0, 0.0, 1.0, 1.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0)))))))
                        {
                         do
                          {
                           if(_GLF_WRAPPED_IF_TRUE(true))
                            {
                             if(_GLF_DEAD(false))
                              {
                               if(_GLF_WRAPPED_IF_FALSE(_GLF_IDENTITY(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y)), bool(bvec2(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y)), false)))))
                                {
                                }
                               else
                                {
                                 for(int _injected_loop_counter = (0 >> _GLF_IDENTITY(int(7), _GLF_IDENTITY(int(7), (int(7)) / 1))); _GLF_WRAPPED_LOOP(_injected_loop_counter != 1); _injected_loop_counter ++)
                                  {
                                   for(int _injected_loop_counter = (0 | (0 >> _GLF_IDENTITY(int(6), int(6)))); _GLF_WRAPPED_LOOP(_injected_loop_counter != 1); _injected_loop_counter ++)
                                    {
                                     if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
                                      continue;
                                     if(_GLF_DEAD(false))
                                      break;
                                     return;
                                    }
                                  }
                                }
                               if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
                                continue;
                              }
                            }
                           else
                            {
                            }
                          }
                         while(_GLF_WRAPPED_LOOP(false));
                        }
                       else
                        {
                        }
                      }
                     for(int _injected_loop_counter = int(_GLF_ONE(1.0, injectionSwitch.y)); _GLF_WRAPPED_LOOP(_injected_loop_counter > (0 >> _GLF_IDENTITY(int(4), int(4)))); _injected_loop_counter --)
                      {
                       if(_GLF_DEAD(false))
                        {
                         do
                          {
                           return;
                          }
                         while(_GLF_WRAPPED_LOOP(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))));
                         if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
                          continue;
                        }
                      }
                     if(_GLF_DEAD(false))
                      continue;
                     if(_GLF_WRAPPED_IF_FALSE(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
                      {
                       if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
                        continue;
                       if(_GLF_DEAD(false))
                        {
                         if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
                          break;
                         continue;
                        }
                      }
                     else
                      {
                       if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
                        {
                         if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
                          continue;
                         for(int _injected_loop_counter = (int(-5935.1249) & int(_GLF_ZERO(0.0, injectionSwitch.x))); _GLF_WRAPPED_LOOP(_injected_loop_counter < (0 ^ int(_GLF_ONE(1.0, injectionSwitch.y)))); _injected_loop_counter ++)
                          {
                           do
                            {
                             do
                              {
                               return;
                              }
                             while(_GLF_WRAPPED_LOOP(false));
                            }
                           while(_GLF_WRAPPED_LOOP(false));
                          }
                        }
                       if(_GLF_WRAPPED_IF_FALSE(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
                        {
                        }
                       else
                        {
                         if(_GLF_WRAPPED_IF_FALSE(false))
                          {
                           if(_GLF_DEAD(false))
                            discard;
                          }
                         else
                          {
                           if(_GLF_DEAD(false))
                            {
                             if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.x >= 0.0))))
                              {
                               do
                                {
                                 if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
                                  {
                                   do
                                    {
                                     return;
                                    }
                                   while(_GLF_WRAPPED_LOOP(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))));
                                  }
                                 if(_GLF_DEAD(false))
                                  {
                                   if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.y >= 0.0))))
                                    {
                                     for(int _injected_loop_counter = 1; _GLF_WRAPPED_LOOP(_injected_loop_counter > (0 << _GLF_IDENTITY(int(1), int(1)))); _injected_loop_counter --)
                                      {
                                       if(_GLF_WRAPPED_IF_FALSE(false))
                                        {
                                        }
                                       else
                                        {
                                         if(_GLF_DEAD(false))
                                          {
                                           if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (injectionSwitch.x < injectionSwitch.y))))
                                            {
                                             if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
                                              return;
                                            }
                                           else
                                            {
                                            }
                                           return;
                                          }
                                        }
                                      }
                                     discard;
                                     if(_GLF_DEAD(false))
                                      continue;
                                    }
                                   else
                                    {
                                    }
                                  }
                                }
                               while(_GLF_WRAPPED_LOOP(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))));
                              }
                             else
                              {
                              }
                             do
                              {
                               do
                                {
                                 if(_GLF_WRAPPED_IF_TRUE(true))
                                  {
                                   for(int _injected_loop_counter = 1; _GLF_WRAPPED_LOOP(_injected_loop_counter > (0 >> _GLF_IDENTITY(int(7), int(7)))); _injected_loop_counter --)
                                    {
                                     do
                                      {
                                       do
                                        {
                                         return;
                                        }
                                       while(_GLF_WRAPPED_LOOP(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))));
                                      }
                                     while(_GLF_WRAPPED_LOOP(false));
                                    }
                                  }
                                 else
                                  {
                                  }
                                }
                               while(_GLF_WRAPPED_LOOP(false));
                              }
                             while(_GLF_WRAPPED_LOOP(false));
                            }
                          }
                        }
                      }
                    }
                  }
                }
               else
                {
                }
              }
             while(_GLF_WRAPPED_LOOP(false));
            }
          }
        }
      }
    }
  }
 while(_GLF_WRAPPED_LOOP(false));
 _GLF_struct_10 _GLF_struct_replacement_10 = _GLF_struct_10(bvec4(true), true, _GLF_struct_7(uvec4(1u), mat2(1.0), 1, _GLF_struct_5(mat4(1.0), mat2x3(1.0), 1u), _GLF_struct_6(bvec4(true), ivec4(1), vec3(1.0), mat2x4(1.0))), polarize(coord), _GLF_struct_8(mat4x2(1.0)), _GLF_struct_9(bvec4(true), ivec4(1), vec3(1.0), mat2(1.0)), bvec4(true));
 for(int _injected_loop_counter = 1; _GLF_WRAPPED_LOOP(_injected_loop_counter != (0 << _GLF_IDENTITY(int(4), int(4)))); _injected_loop_counter --)
  {
   if(_GLF_WRAPPED_IF_TRUE(_GLF_IDENTITY(true, bool(bool(true)))))
    {
     if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
      return;
    }
   else
    {
    }
   if(_GLF_DEAD(false))
    continue;
  }
 for(int _injected_loop_counter = (0 | 1); _GLF_WRAPPED_LOOP(_injected_loop_counter > (0 << _GLF_IDENTITY(int(6), int(6)))); _injected_loop_counter --)
  {
   if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
    return;
  }
 if(_GLF_WRAPPED_IF_TRUE(true))
  {
   do
    {
     if(_GLF_WRAPPED_IF_FALSE(false))
      {
      }
     else
      {
       for(int _injected_loop_counter = 0; _GLF_WRAPPED_LOOP(_injected_loop_counter < (1 & 1)); _injected_loop_counter ++)
        {
         for(int _injected_loop_counter = 0; _GLF_WRAPPED_LOOP(_injected_loop_counter < _GLF_IDENTITY(1, ~ (~ (1)))); _injected_loop_counter ++)
          {
           coord = _GLF_struct_replacement_4._f1._f0.coord1 - coord2 + _GLF_struct_replacement_10.coord3;
          }
        }
       if(_GLF_WRAPPED_IF_FALSE(false))
        {
         if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
          return;
        }
       else
        {
         do
          {
           if(_GLF_DEAD(false))
            return;
           if(_GLF_DEAD(false))
            {
             if(_GLF_WRAPPED_IF_FALSE(false))
              {
              }
             else
              {
               for(int _injected_loop_counter = 0; _GLF_WRAPPED_LOOP(_injected_loop_counter != 1); _injected_loop_counter ++)
                {
                 discard;
                }
              }
            }
           if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
            {
             if(_GLF_DEAD(false))
              break;
             for(int _injected_loop_counter = (0 >> _GLF_IDENTITY(int(7), int(7))); _GLF_WRAPPED_LOOP(_injected_loop_counter < ((1 << _GLF_IDENTITY(int(7), int(7))) >> _GLF_IDENTITY(int(7), int(7)))); _injected_loop_counter ++)
              {
               do
                {
                 if(_GLF_WRAPPED_IF_FALSE(false))
                  {
                  }
                 else
                  {
                   if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.x >= length(log(vec2(1.0, 1.0)))))))
                    {
                     return;
                    }
                   else
                    {
                    }
                  }
                }
               while(_GLF_WRAPPED_LOOP(false));
              }
            }
          }
         while(_GLF_WRAPPED_LOOP(false));
        }
      }
    }
   while(_GLF_WRAPPED_LOOP(false));
  }
 else
  {
  }
 if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.y >= 0.0))))
  {
   if(_GLF_WRAPPED_IF_FALSE(false))
    {
    }
   else
    {
     if(_GLF_WRAPPED_IF_TRUE(true))
      {
       if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.y >= 0.0))))
        {
         if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
          return;
         if(_GLF_DEAD(false))
          {
           if(_GLF_DEAD(false))
            {
             do
              {
               return;
              }
             while(_GLF_WRAPPED_LOOP(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))));
            }
           if(_GLF_WRAPPED_IF_FALSE(false))
            {
            }
           else
            {
             return;
            }
          }
         if(_GLF_WRAPPED_IF_FALSE(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
          {
          }
         else
          {
           if(_GLF_WRAPPED_IF_FALSE(false))
            {
            }
           else
            {
             do
              {
               if(_GLF_WRAPPED_IF_TRUE(_GLF_IDENTITY(true, bool(bvec4(true, false, false, false)))))
                {
                 if(_GLF_WRAPPED_IF_TRUE(_GLF_IDENTITY(true, ! (! (_GLF_IDENTITY(true, bool(bvec4(true, false, false, true))))))))
                  {
                   coord = floor(coord * 256.0) / 256.0;
                   if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < _GLF_IDENTITY(dot(vec3(1.0, 0.0, 0.0), vec3(0.0, 1.0, 1.0)), dot(vec3(1.0, 0.0, 0.0), vec3(0.0, 1.0, 1.0)))))))
                    {
                     do
                      {
                       return;
                      }
                     while(_GLF_WRAPPED_LOOP(_GLF_FALSE(false, (gl_FragCoord.y < length(log(vec2(1.0, 1.0)))))));
                    }
                   if(_GLF_DEAD(false))
                    {
                     if(_GLF_WRAPPED_IF_TRUE(true))
                      {
                       return;
                      }
                     else
                      {
                      }
                    }
                  }
                 else
                  {
                   if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.x >= length(vec4(0.0, 0.0, 0.0, 0.0))))))
                    {
                     do
                      {
                       if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
                        return;
                      }
                     while(_GLF_WRAPPED_LOOP(false));
                    }
                   else
                    {
                    }
                  }
                }
               else
                {
                }
              }
             while(_GLF_WRAPPED_LOOP(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))));
            }
          }
        }
       else
        {
         if(_GLF_WRAPPED_IF_TRUE(true))
          {
           do
            {
             do
              {
               if(_GLF_DEAD(false))
                {
                 if(_GLF_DEAD(false))
                  discard;
                 if(_GLF_WRAPPED_IF_FALSE(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
                  {
                  }
                 else
                  {
                   if(_GLF_WRAPPED_IF_FALSE(false))
                    {
                    }
                   else
                    {
                     return;
                    }
                  }
                }
              }
             while(_GLF_WRAPPED_LOOP(false));
            }
           while(_GLF_WRAPPED_LOOP(false));
          }
         else
          {
          }
        }
       if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.x >= 0.0))))
        {
         if(_GLF_WRAPPED_IF_TRUE(true))
          {
           if(_GLF_DEAD(false))
            return;
          }
         else
          {
          }
        }
       else
        {
        }
      }
     else
      {
      }
    }
  }
 else
  {
  }
 for(int _injected_loop_counter = 0; _GLF_WRAPPED_LOOP(_injected_loop_counter != 1); _injected_loop_counter ++)
  {
   if(_GLF_WRAPPED_IF_FALSE(false))
    {
     if(_GLF_DEAD(false))
      {
       if(_GLF_WRAPPED_IF_TRUE(true))
        {
         if(_GLF_WRAPPED_IF_FALSE(false))
          {
          }
         else
          {
           if(_GLF_WRAPPED_IF_TRUE(true))
            {
             if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
              {
               if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.y >= 0.0))))
                {
                 return;
                }
               else
                {
                }
              }
             return;
             if(_GLF_DEAD(false))
              return;
            }
           else
            {
             if(_GLF_WRAPPED_IF_TRUE(true))
              {
               if(_GLF_DEAD(false))
                {
                 if(_GLF_WRAPPED_IF_FALSE(false))
                  {
                  }
                 else
                  {
                   return;
                  }
                }
              }
             else
              {
              }
            }
          }
        }
       else
        {
        }
      }
    }
   else
    {
     if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.x >= 0.0))))
      {
       do
        {
         if(_GLF_WRAPPED_IF_FALSE(false))
          {
          }
         else
          {
           for(int _injected_loop_counter = int(_GLF_ZERO(0.0, injectionSwitch.x)); _GLF_WRAPPED_LOOP(_injected_loop_counter != (int(_GLF_ONE(1.0, injectionSwitch.y)) | 1)); _injected_loop_counter ++)
            {
             _GLF_color = vec4(texture(tex, coord).xyz, 1.0);
            }
          }
         if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < abs(0.0)))))
          {
           if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < length(sqrt(0.0))))))
            {
             if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
              discard;
             break;
            }
           break;
          }
         if(_GLF_DEAD(false))
          discard;
        }
       while(_GLF_WRAPPED_LOOP(false));
      }
     else
      {
      }
    }
  }
 if(_GLF_WRAPPED_IF_FALSE(false))
  {
  }
 else
  {
   for(int _injected_loop_counter = (0 ^ 1); _GLF_WRAPPED_LOOP(_injected_loop_counter != (0 | 0)); _injected_loop_counter --)
    {
     if(_GLF_WRAPPED_IF_TRUE(true))
      {
       if(_GLF_DEAD(false))
        {
         if(_GLF_WRAPPED_IF_FALSE(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
          {
          }
         else
          {
           return;
          }
        }
       for(int _injected_loop_counter = 1; _GLF_WRAPPED_LOOP(_injected_loop_counter > (_GLF_IDENTITY(0, int(int(0))) << _GLF_IDENTITY(int(5), int(5)))); _injected_loop_counter --)
        {
         for(int _injected_loop_counter = int(_GLF_ZERO(0.0, injectionSwitch.x)); _GLF_WRAPPED_LOOP(_injected_loop_counter < 1); _injected_loop_counter ++)
          {
           if(_GLF_WRAPPED_IF_TRUE(true))
            {
             for(int _injected_loop_counter = 0; _GLF_WRAPPED_LOOP(_injected_loop_counter != int(_GLF_ONE(1.0, injectionSwitch.y))); _injected_loop_counter ++)
              {
               if(_GLF_DEAD(false))
                {
                 for(int _injected_loop_counter = int(_GLF_ONE(1.0, injectionSwitch.y)); _GLF_WRAPPED_LOOP(_injected_loop_counter > 0); _injected_loop_counter --)
                  {
                   if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.y >= 0.0))))
                    {
                     discard;
                    }
                   else
                    {
                    }
                  }
                }
               if(_GLF_WRAPPED_IF_FALSE(_GLF_FALSE(false, (gl_FragCoord.y < _GLF_ZERO(0.0, injectionSwitch.x)))))
                {
                }
               else
                {
                 if(_GLF_DEAD(false))
                  return;
                }
               for(int _injected_loop_counter = 0; _GLF_WRAPPED_LOOP(_injected_loop_counter < 1); _injected_loop_counter ++)
                {
                 do
                  {
                   do
                    {
                     if(_GLF_WRAPPED_IF_TRUE(true))
                      {
                       if(_GLF_DEAD(false))
                        return;
                      }
                     else
                      {
                      }
                     if(_GLF_WRAPPED_IF_FALSE(false))
                      {
                      }
                     else
                      {
                       if(_GLF_DEAD(false))
                        return;
                      }
                     if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
                      return;
                     if(_GLF_DEAD(false))
                      continue;
                    }
                   while(_GLF_WRAPPED_LOOP(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))));
                  }
                 while(_GLF_WRAPPED_LOOP(false));
                 if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
                  discard;
                }
               if(_GLF_WRAPPED_IF_TRUE(true))
                {
                 if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
                  break;
                 if(_GLF_WRAPPED_IF_FALSE(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
                  {
                  }
                 else
                  {
                   if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < tan(0.0)))))
                    {
                     if(_GLF_DEAD(false))
                      continue;
                     break;
                    }
                   if(_GLF_DEAD(false))
                    {
                     if(_GLF_WRAPPED_IF_FALSE(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
                      {
                       if(_GLF_DEAD(false))
                        {
                         if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
                          discard;
                         break;
                        }
                      }
                     else
                      {
                       if(_GLF_DEAD(_GLF_IDENTITY(false, (false) && true)))
                        {
                         if(_GLF_DEAD(false))
                          continue;
                         continue;
                        }
                       do
                        {
                         for(int _injected_loop_counter = ((1 << _GLF_IDENTITY(int(0), int(0))) >> _GLF_IDENTITY(int(0), int(0))); _GLF_WRAPPED_LOOP(_injected_loop_counter != 0); _injected_loop_counter --)
                          {
                           discard;
                          }
                        }
                       while(_GLF_WRAPPED_LOOP(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))));
                      }
                    }
                  }
                 if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.y >= 0.0))))
                  {
                   if(_GLF_DEAD(false))
                    return;
                  }
                 else
                  {
                  }
                }
               else
                {
                }
               if(_GLF_DEAD(false))
                break;
               if(_GLF_DEAD(false))
                continue;
              }
            }
           else
            {
            }
          }
        }
       if(_GLF_DEAD(false))
        continue;
      }
     else
      {
      }
    }
  }
 if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (injectionSwitch.x < injectionSwitch.y))))
  {
   do
    {
     if(_GLF_DEAD(false))
      continue;
     if(_GLF_DEAD(false))
      {
       if(_GLF_WRAPPED_IF_TRUE(_GLF_IDENTITY(_GLF_TRUE(true, (injectionSwitch.x < injectionSwitch.y)), (_GLF_TRUE(true, (injectionSwitch.x < injectionSwitch.y))) && true)))
        {
         if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
          discard;
         if(_GLF_WRAPPED_IF_TRUE(true))
          {
           if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.x >= 0.0))))
            {
             if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (injectionSwitch.x < injectionSwitch.y))))
              {
               do
                {
                 if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
                  {
                   if(_GLF_DEAD(false))
                    continue;
                   discard;
                  }
                }
               while(_GLF_WRAPPED_LOOP(false));
              }
             else
              {
              }
             if(_GLF_WRAPPED_IF_TRUE(true))
              {
               do
                {
                 return;
                }
               while(_GLF_WRAPPED_LOOP(false));
              }
             else
              {
              }
            }
           else
            {
             if(_GLF_DEAD(false))
              {
               do
                {
                 return;
                 if(_GLF_WRAPPED_IF_FALSE(false))
                  {
                  }
                 else
                  {
                   if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
                    discard;
                  }
                }
               while(_GLF_WRAPPED_LOOP(false));
              }
             if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
              discard;
            }
          }
         else
          {
          }
         if(_GLF_DEAD(false))
          {
           if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
            continue;
           break;
          }
         if(_GLF_DEAD(false))
          {
           if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
            continue;
           if(_GLF_DEAD(false))
            continue;
           continue;
          }
         if(_GLF_WRAPPED_IF_TRUE(true))
          {
           if(_GLF_DEAD(false))
            continue;
           for(int _injected_loop_counter = 0; _GLF_WRAPPED_LOOP(_injected_loop_counter != int(_GLF_ONE(1.0, injectionSwitch.y))); _injected_loop_counter ++)
            {
             if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
              return;
            }
          }
         else
          {
          }
        }
       else
        {
        }
       if(_GLF_DEAD(false))
        discard;
      }
    }
   while(_GLF_WRAPPED_LOOP(false));
  }
 else
  {
  }
}
