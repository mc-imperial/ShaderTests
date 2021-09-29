; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 8
; Bound: 79
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %55
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 310
               OpName %4 "main"
               OpName %8 "f0"
               OpName %12 "s1"
               OpName %23 "buf0"
               OpMemberName %23 0 "_GLF_uniform_float_values"
               OpName %25 ""
               OpName %32 "f1"
               OpName %55 "_GLF_color"
               OpName %57 "buf1"
               OpMemberName %57 0 "_GLF_uniform_int_values"
               OpName %59 ""
               OpDecorate %22 ArrayStride 16
               OpMemberDecorate %23 0 Offset 0
               OpDecorate %23 Block
               OpDecorate %25 DescriptorSet 0
               OpDecorate %25 Binding 0
               OpDecorate %55 Location 0
               OpDecorate %56 ArrayStride 16
               OpMemberDecorate %57 0 Offset 0
               OpDecorate %57 Block
               OpDecorate %59 DescriptorSet 0
               OpDecorate %59 Binding 1
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeFloat 32
          %7 = OpTypePointer Function %6
          %9 = OpConstant %6 10
         %10 = OpConstant %6 9.99999997e-07
         %13 = OpConstant %6 0x1.b38fb8p-127
         %15 = OpConstant %6 0
         %16 = OpTypeBool
         %20 = OpTypeInt 32 0
         %21 = OpConstant %20 2
         %22 = OpTypeArray %6 %21
         %23 = OpTypeStruct %22
         %24 = OpTypePointer Uniform %23
         %25 = OpVariable %24 Uniform
         %26 = OpTypeInt 32 1
         %27 = OpConstant %26 0
         %28 = OpConstant %26 1
         %29 = OpTypePointer Uniform %6
         %53 = OpTypeVector %6 4
         %54 = OpTypePointer Output %53
         %55 = OpVariable %54 Output
         %56 = OpTypeArray %26 %21
         %57 = OpTypeStruct %56
         %58 = OpTypePointer Uniform %57
         %59 = OpVariable %58 Uniform
         %60 = OpTypePointer Uniform %26
          %4 = OpFunction %2 None %3
          %5 = OpLabel
          %8 = OpVariable %7 Function
         %12 = OpVariable %7 Function
         %32 = OpVariable %7 Function
         %11 = OpFMod %6 %9 %10
               OpStore %8 %11
               OpStore %12 %13
         %14 = OpLoad %6 %12
         %17 = OpFOrdEqual %16 %14 %15
               OpSelectionMerge %19 None
               OpBranchConditional %17 %18 %19
         %18 = OpLabel
         %30 = OpAccessChain %29 %25 %27 %28
         %31 = OpLoad %6 %30
               OpStore %12 %31
               OpBranch %19
         %19 = OpLabel
         %33 = OpLoad %6 %12
         %34 = OpFMod %6 %9 %33
               OpStore %32 %34
         %35 = OpLoad %6 %8
         %36 = OpAccessChain %29 %25 %27 %27
         %37 = OpLoad %6 %36
         %38 = OpFNegate %6 %37
         %39 = OpFOrdGreaterThan %16 %35 %38
               OpSelectionMerge %41 None
               OpBranchConditional %39 %40 %41
         %40 = OpLabel
         %42 = OpLoad %6 %8
         %43 = OpAccessChain %29 %25 %27 %27
         %44 = OpLoad %6 %43
         %45 = OpFOrdLessThan %16 %42 %44
               OpBranch %41
         %41 = OpLabel
         %46 = OpPhi %16 %39 %19 %45 %40
         %47 = OpLoad %6 %8
         %48 = OpLoad %6 %32
         %49 = OpFOrdEqual %16 %47 %48
         %50 = OpLogicalOr %16 %46 %49
               OpSelectionMerge %52 None
               OpBranchConditional %50 %51 %74
         %51 = OpLabel
         %61 = OpAccessChain %60 %59 %27 %28
         %62 = OpLoad %26 %61
         %63 = OpConvertSToF %6 %62
         %64 = OpAccessChain %60 %59 %27 %27
         %65 = OpLoad %26 %64
         %66 = OpConvertSToF %6 %65
         %67 = OpAccessChain %60 %59 %27 %27
         %68 = OpLoad %26 %67
         %69 = OpConvertSToF %6 %68
         %70 = OpAccessChain %60 %59 %27 %28
         %71 = OpLoad %26 %70
         %72 = OpConvertSToF %6 %71
         %73 = OpCompositeConstruct %53 %63 %66 %69 %72
               OpStore %55 %73
               OpBranch %52
         %74 = OpLabel
         %75 = OpAccessChain %60 %59 %27 %27
         %76 = OpLoad %26 %75
         %77 = OpConvertSToF %6 %76
         %78 = OpCompositeConstruct %53 %77 %77 %77 %77
               OpStore %55 %78
               OpBranch %52
         %52 = OpLabel
               OpReturn
               OpFunctionEnd
