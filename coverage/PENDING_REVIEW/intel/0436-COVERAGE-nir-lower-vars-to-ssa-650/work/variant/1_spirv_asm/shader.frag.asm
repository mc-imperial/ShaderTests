; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 82
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %58
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %9 "func("
               OpName %12 "v"
               OpName %16 "buf0"
               OpMemberName %16 0 "_GLF_uniform_float_values"
               OpName %18 ""
               OpName %28 "a"
               OpName %43 "indexable"
               OpName %58 "_GLF_color"
               OpName %60 "buf1"
               OpMemberName %60 0 "_GLF_uniform_int_values"
               OpName %62 ""
               OpDecorate %15 ArrayStride 16
               OpMemberDecorate %16 0 Offset 0
               OpDecorate %16 Block
               OpDecorate %18 DescriptorSet 0
               OpDecorate %18 Binding 0
               OpDecorate %58 Location 0
               OpDecorate %59 ArrayStride 16
               OpMemberDecorate %60 0 Offset 0
               OpDecorate %60 Block
               OpDecorate %62 DescriptorSet 0
               OpDecorate %62 Binding 1
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeFloat 32
          %7 = OpTypeVector %6 2
          %8 = OpTypeFunction %7
         %11 = OpTypePointer Function %7
         %13 = OpTypeInt 32 0
         %14 = OpConstant %13 2
         %15 = OpTypeArray %6 %14
         %16 = OpTypeStruct %15
         %17 = OpTypePointer Uniform %16
         %18 = OpVariable %17 Uniform
         %19 = OpTypeInt 32 1
         %20 = OpConstant %19 0
         %21 = OpTypePointer Uniform %6
         %24 = OpConstant %13 1
         %25 = OpTypePointer Function %6
         %27 = OpTypePointer Function %19
         %29 = OpConstant %19 2
         %30 = OpConstant %19 1
         %38 = OpConstant %13 3
         %39 = OpTypeArray %7 %38
         %42 = OpTypePointer Function %39
         %52 = OpTypeBool
         %56 = OpTypeVector %6 4
         %57 = OpTypePointer Output %56
         %58 = OpVariable %57 Output
         %59 = OpTypeArray %19 %14
         %60 = OpTypeStruct %59
         %61 = OpTypePointer Uniform %60
         %62 = OpVariable %61 Uniform
         %63 = OpTypePointer Uniform %19
          %4 = OpFunction %2 None %3
          %5 = OpLabel
         %48 = OpFunctionCall %7 %9
         %49 = OpCompositeExtract %6 %48 1
         %50 = OpAccessChain %21 %18 %20 %20
         %51 = OpLoad %6 %50
         %53 = OpFOrdEqual %52 %49 %51
               OpSelectionMerge %55 None
               OpBranchConditional %53 %54 %77
         %54 = OpLabel
         %64 = OpAccessChain %63 %62 %20 %20
         %65 = OpLoad %19 %64
         %66 = OpConvertSToF %6 %65
         %67 = OpAccessChain %63 %62 %20 %30
         %68 = OpLoad %19 %67
         %69 = OpConvertSToF %6 %68
         %70 = OpAccessChain %63 %62 %20 %30
         %71 = OpLoad %19 %70
         %72 = OpConvertSToF %6 %71
         %73 = OpAccessChain %63 %62 %20 %20
         %74 = OpLoad %19 %73
         %75 = OpConvertSToF %6 %74
         %76 = OpCompositeConstruct %56 %66 %69 %72 %75
               OpStore %58 %76
               OpBranch %55
         %77 = OpLabel
         %78 = OpAccessChain %63 %62 %20 %30
         %79 = OpLoad %19 %78
         %80 = OpConvertSToF %6 %79
         %81 = OpCompositeConstruct %56 %80 %80 %80 %80
               OpStore %58 %81
               OpBranch %55
         %55 = OpLabel
               OpReturn
               OpFunctionEnd
          %9 = OpFunction %7 None %8
         %10 = OpLabel
         %12 = OpVariable %11 Function
         %28 = OpVariable %27 Function
         %43 = OpVariable %42 Function
         %22 = OpAccessChain %21 %18 %20 %20
         %23 = OpLoad %6 %22
         %26 = OpAccessChain %25 %12 %24
               OpStore %26 %23
               OpStore %28 %29
         %31 = OpAccessChain %21 %18 %20 %30
         %32 = OpLoad %6 %31
         %33 = OpCompositeConstruct %7 %32 %32
         %34 = OpAccessChain %21 %18 %20 %30
         %35 = OpLoad %6 %34
         %36 = OpCompositeConstruct %7 %35 %35
         %37 = OpLoad %7 %12
         %40 = OpCompositeConstruct %39 %33 %36 %37
         %41 = OpLoad %19 %28
               OpStore %43 %40
         %44 = OpAccessChain %11 %43 %41
         %45 = OpLoad %7 %44
               OpReturnValue %45
               OpFunctionEnd
