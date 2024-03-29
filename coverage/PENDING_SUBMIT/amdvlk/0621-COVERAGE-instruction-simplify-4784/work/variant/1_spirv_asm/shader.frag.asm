; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 74
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %60
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %9 "v"
               OpName %13 "buf0"
               OpMemberName %13 0 "_GLF_uniform_float_values"
               OpName %15 ""
               OpName %30 "buf2"
               OpMemberName %30 0 "resolution"
               OpName %32 ""
               OpName %44 "buf1"
               OpMemberName %44 0 "_GLF_uniform_int_values"
               OpName %46 ""
               OpName %60 "_GLF_color"
               OpDecorate %12 ArrayStride 16
               OpMemberDecorate %13 0 Offset 0
               OpDecorate %13 Block
               OpDecorate %15 DescriptorSet 0
               OpDecorate %15 Binding 0
               OpMemberDecorate %30 0 Offset 0
               OpDecorate %30 Block
               OpDecorate %32 DescriptorSet 0
               OpDecorate %32 Binding 2
               OpDecorate %43 ArrayStride 16
               OpMemberDecorate %44 0 Offset 0
               OpDecorate %44 Block
               OpDecorate %46 DescriptorSet 0
               OpDecorate %46 Binding 1
               OpDecorate %60 Location 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeFloat 32
          %7 = OpTypeVector %6 2
          %8 = OpTypePointer Function %7
         %10 = OpTypeInt 32 0
         %11 = OpConstant %10 2
         %12 = OpTypeArray %6 %11
         %13 = OpTypeStruct %12
         %14 = OpTypePointer Uniform %13
         %15 = OpVariable %14 Uniform
         %16 = OpTypeInt 32 1
         %17 = OpConstant %16 0
         %18 = OpConstant %16 1
         %19 = OpTypePointer Uniform %6
         %22 = OpTypeVector %6 3
         %23 = OpTypeMatrix %22 3
         %24 = OpConstant %6 1
         %25 = OpConstant %6 0
         %30 = OpTypeStruct %7
         %31 = OpTypePointer Uniform %30
         %32 = OpVariable %31 Uniform
         %33 = OpTypePointer Uniform %7
         %42 = OpConstant %10 1
         %43 = OpTypeArray %16 %42
         %44 = OpTypeStruct %43
         %45 = OpTypePointer Uniform %44
         %46 = OpVariable %45 Uniform
         %47 = OpTypePointer Uniform %16
         %52 = OpTypeBool
         %53 = OpTypeVector %52 2
         %58 = OpTypeVector %6 4
         %59 = OpTypePointer Output %58
         %60 = OpVariable %59 Output
          %4 = OpFunction %2 None %3
          %5 = OpLabel
          %9 = OpVariable %8 Function
         %20 = OpAccessChain %19 %15 %17 %18
         %21 = OpLoad %6 %20
         %26 = OpCompositeConstruct %22 %21 %25 %25
         %27 = OpCompositeConstruct %22 %25 %21 %25
         %28 = OpCompositeConstruct %22 %25 %25 %21
         %29 = OpCompositeConstruct %23 %26 %27 %28
         %34 = OpAccessChain %33 %32 %17
         %35 = OpLoad %7 %34
         %36 = OpCompositeExtract %6 %35 0
         %37 = OpCompositeExtract %6 %35 1
         %38 = OpCompositeConstruct %22 %36 %37 %24
         %39 = OpMatrixTimesVector %22 %29 %38
         %40 = OpVectorShuffle %7 %39 %39 0 1
               OpStore %9 %40
         %41 = OpLoad %7 %9
         %48 = OpAccessChain %47 %46 %17 %17
         %49 = OpLoad %16 %48
         %50 = OpConvertSToF %6 %49
         %51 = OpCompositeConstruct %7 %50 %50
         %54 = OpFOrdEqual %53 %41 %51
         %55 = OpAll %52 %54
               OpSelectionMerge %57 None
               OpBranchConditional %55 %56 %69
         %56 = OpLabel
         %61 = OpAccessChain %19 %15 %17 %17
         %62 = OpLoad %6 %61
         %63 = OpLoad %7 %9
         %64 = OpAccessChain %19 %15 %17 %17
         %65 = OpLoad %6 %64
         %66 = OpCompositeExtract %6 %63 0
         %67 = OpCompositeExtract %6 %63 1
         %68 = OpCompositeConstruct %58 %62 %66 %67 %65
               OpStore %60 %68
               OpBranch %57
         %69 = OpLabel
         %70 = OpAccessChain %47 %46 %17 %17
         %71 = OpLoad %16 %70
         %72 = OpConvertSToF %6 %71
         %73 = OpCompositeConstruct %58 %72 %72 %72 %72
               OpStore %60 %73
               OpBranch %57
         %57 = OpLabel
               OpReturn
               OpFunctionEnd
