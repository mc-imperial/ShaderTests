; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 82
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %9 %30
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %9 "gl_FragCoord"
               OpName %17 "buf1"
               OpMemberName %17 0 "_GLF_uniform_float_values"
               OpName %19 ""
               OpName %30 "_GLF_color"
               OpName %33 "buf0"
               OpMemberName %33 0 "_GLF_uniform_int_values"
               OpName %35 ""
               OpName %44 "v"
               OpDecorate %9 BuiltIn FragCoord
               OpDecorate %16 ArrayStride 16
               OpMemberDecorate %17 0 Offset 0
               OpDecorate %17 Block
               OpDecorate %19 DescriptorSet 0
               OpDecorate %19 Binding 1
               OpDecorate %30 Location 0
               OpDecorate %32 ArrayStride 16
               OpMemberDecorate %33 0 Offset 0
               OpDecorate %33 Block
               OpDecorate %35 DescriptorSet 0
               OpDecorate %35 Binding 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeFloat 32
          %7 = OpTypeVector %6 4
          %8 = OpTypePointer Input %7
          %9 = OpVariable %8 Input
         %10 = OpTypeInt 32 0
         %11 = OpConstant %10 1
         %12 = OpTypePointer Input %6
         %15 = OpConstant %10 3
         %16 = OpTypeArray %6 %15
         %17 = OpTypeStruct %16
         %18 = OpTypePointer Uniform %17
         %19 = OpVariable %18 Uniform
         %20 = OpTypeInt 32 1
         %21 = OpConstant %20 0
         %22 = OpTypePointer Uniform %6
         %25 = OpTypeBool
         %29 = OpTypePointer Output %7
         %30 = OpVariable %29 Output
         %31 = OpConstant %10 2
         %32 = OpTypeArray %20 %31
         %33 = OpTypeStruct %32
         %34 = OpTypePointer Uniform %33
         %35 = OpVariable %34 Uniform
         %36 = OpTypePointer Uniform %20
         %42 = OpTypeVector %20 2
         %43 = OpTypePointer Function %42
         %45 = OpTypeVector %6 2
         %48 = OpConstant %20 1
         %55 = OpConstant %20 2
         %62 = OpTypePointer Function %20
         %72 = OpConstant %10 0
          %4 = OpFunction %2 None %3
          %5 = OpLabel
         %44 = OpVariable %43 Function
         %13 = OpAccessChain %12 %9 %11
         %14 = OpLoad %6 %13
         %23 = OpAccessChain %22 %19 %21 %21
         %24 = OpLoad %6 %23
         %26 = OpFOrdLessThan %25 %14 %24
               OpSelectionMerge %28 None
               OpBranchConditional %26 %27 %41
         %27 = OpLabel
         %37 = OpAccessChain %36 %35 %21 %21
         %38 = OpLoad %20 %37
         %39 = OpConvertSToF %6 %38
         %40 = OpCompositeConstruct %7 %39 %39 %39 %39
               OpStore %30 %40
               OpBranch %28
         %41 = OpLabel
         %46 = OpLoad %7 %9
         %47 = OpVectorShuffle %45 %46 %46 0 1
         %49 = OpAccessChain %22 %19 %21 %48
         %50 = OpLoad %6 %49
         %51 = OpAccessChain %22 %19 %21 %21
         %52 = OpLoad %6 %51
         %53 = OpCompositeConstruct %45 %50 %52
         %54 = OpFSub %45 %47 %53
         %56 = OpAccessChain %22 %19 %21 %55
         %57 = OpLoad %6 %56
         %58 = OpVectorTimesScalar %45 %54 %57
         %59 = OpConvertFToS %42 %58
               OpStore %44 %59
         %60 = OpAccessChain %22 %19 %21 %48
         %61 = OpLoad %6 %60
         %63 = OpAccessChain %62 %44 %11
         %64 = OpLoad %20 %63
         %65 = OpAccessChain %36 %35 %21 %48
         %66 = OpLoad %20 %65
         %67 = OpISub %20 %64 %66
         %68 = OpAccessChain %36 %35 %21 %48
         %69 = OpLoad %20 %68
         %70 = OpBitwiseAnd %20 %67 %69
         %71 = OpConvertSToF %6 %70
         %73 = OpAccessChain %62 %44 %72
         %74 = OpLoad %20 %73
         %75 = OpAccessChain %36 %35 %21 %48
         %76 = OpLoad %20 %75
         %77 = OpBitwiseAnd %20 %74 %76
         %78 = OpConvertSToF %6 %77
         %79 = OpAccessChain %22 %19 %21 %48
         %80 = OpLoad %6 %79
         %81 = OpCompositeConstruct %7 %61 %71 %78 %80
               OpStore %30 %81
               OpBranch %28
         %28 = OpLabel
               OpReturn
               OpFunctionEnd
