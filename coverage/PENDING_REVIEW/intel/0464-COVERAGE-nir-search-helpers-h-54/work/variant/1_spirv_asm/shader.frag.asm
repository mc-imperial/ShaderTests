; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 85
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %66
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %9 "v"
               OpName %13 "buf0"
               OpMemberName %13 0 "_GLF_uniform_uint_values"
               OpName %15 ""
               OpName %32 "buf1"
               OpMemberName %32 0 "_GLF_uniform_int_values"
               OpName %34 ""
               OpName %47 "buf2"
               OpMemberName %47 0 "_GLF_uniform_float_values"
               OpName %49 ""
               OpName %66 "_GLF_color"
               OpDecorate %12 ArrayStride 16
               OpMemberDecorate %13 0 Offset 0
               OpDecorate %13 Block
               OpDecorate %15 DescriptorSet 0
               OpDecorate %15 Binding 0
               OpDecorate %31 ArrayStride 16
               OpMemberDecorate %32 0 Offset 0
               OpDecorate %32 Block
               OpDecorate %34 DescriptorSet 0
               OpDecorate %34 Binding 1
               OpDecorate %46 ArrayStride 16
               OpMemberDecorate %47 0 Offset 0
               OpDecorate %47 Block
               OpDecorate %49 DescriptorSet 0
               OpDecorate %49 Binding 2
               OpDecorate %66 Location 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeFloat 32
          %7 = OpTypeVector %6 4
          %8 = OpTypePointer Function %7
         %10 = OpTypeInt 32 0
         %11 = OpConstant %10 1
         %12 = OpTypeArray %10 %11
         %13 = OpTypeStruct %12
         %14 = OpTypePointer Uniform %13
         %15 = OpVariable %14 Uniform
         %16 = OpTypeInt 32 1
         %17 = OpConstant %16 0
         %18 = OpTypePointer Uniform %10
         %23 = OpConstant %10 92382
         %24 = OpTypeBool
         %25 = OpConstantTrue %24
         %30 = OpConstant %10 2
         %31 = OpTypeArray %16 %30
         %32 = OpTypeStruct %31
         %33 = OpTypePointer Uniform %32
         %34 = OpVariable %33 Uniform
         %35 = OpTypePointer Uniform %16
         %45 = OpConstant %10 3
         %46 = OpTypeArray %6 %45
         %47 = OpTypeStruct %46
         %48 = OpTypePointer Uniform %47
         %49 = OpVariable %48 Uniform
         %50 = OpConstant %16 1
         %51 = OpTypePointer Uniform %6
         %54 = OpConstant %16 2
         %65 = OpTypePointer Output %7
         %66 = OpVariable %65 Output
          %4 = OpFunction %2 None %3
          %5 = OpLabel
          %9 = OpVariable %8 Function
         %19 = OpAccessChain %18 %15 %17 %17
         %20 = OpLoad %10 %19
         %21 = OpAccessChain %18 %15 %17 %17
         %22 = OpLoad %10 %21
         %26 = OpSelect %10 %25 %23 %22
         %27 = OpUDiv %10 %20 %26
         %28 = OpExtInst %7 %1 UnpackUnorm4x8 %27
               OpStore %9 %28
         %29 = OpLoad %7 %9
         %36 = OpAccessChain %35 %34 %17 %17
         %37 = OpLoad %16 %36
         %38 = OpConvertSToF %6 %37
         %39 = OpAccessChain %35 %34 %17 %17
         %40 = OpLoad %16 %39
         %41 = OpConvertSToF %6 %40
         %42 = OpAccessChain %35 %34 %17 %17
         %43 = OpLoad %16 %42
         %44 = OpConvertSToF %6 %43
         %52 = OpAccessChain %51 %49 %17 %50
         %53 = OpLoad %6 %52
         %55 = OpAccessChain %51 %49 %17 %54
         %56 = OpLoad %6 %55
         %57 = OpFDiv %6 %53 %56
         %58 = OpCompositeConstruct %7 %38 %41 %44 %57
         %59 = OpExtInst %6 %1 Distance %29 %58
         %60 = OpAccessChain %51 %49 %17 %17
         %61 = OpLoad %6 %60
         %62 = OpFOrdLessThan %24 %59 %61
               OpSelectionMerge %64 None
               OpBranchConditional %62 %63 %80
         %63 = OpLabel
         %67 = OpAccessChain %35 %34 %17 %50
         %68 = OpLoad %16 %67
         %69 = OpConvertSToF %6 %68
         %70 = OpAccessChain %35 %34 %17 %17
         %71 = OpLoad %16 %70
         %72 = OpConvertSToF %6 %71
         %73 = OpAccessChain %35 %34 %17 %17
         %74 = OpLoad %16 %73
         %75 = OpConvertSToF %6 %74
         %76 = OpAccessChain %35 %34 %17 %50
         %77 = OpLoad %16 %76
         %78 = OpConvertSToF %6 %77
         %79 = OpCompositeConstruct %7 %69 %72 %75 %78
               OpStore %66 %79
               OpBranch %64
         %80 = OpLabel
         %81 = OpAccessChain %35 %34 %17 %17
         %82 = OpLoad %16 %81
         %83 = OpConvertSToF %6 %82
         %84 = OpCompositeConstruct %7 %83 %83 %83 %83
               OpStore %66 %84
               OpBranch %64
         %64 = OpLabel
               OpReturn
               OpFunctionEnd
