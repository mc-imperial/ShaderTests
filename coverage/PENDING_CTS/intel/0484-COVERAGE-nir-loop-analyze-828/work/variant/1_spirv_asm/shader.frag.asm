; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 75
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %56
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %8 "a"
               OpName %12 "b"
               OpName %16 "buf0"
               OpMemberName %16 0 "_GLF_uniform_int_values"
               OpName %18 ""
               OpName %24 "i"
               OpName %56 "_GLF_color"
               OpDecorate %15 ArrayStride 16
               OpMemberDecorate %16 0 Offset 0
               OpDecorate %16 Block
               OpDecorate %18 DescriptorSet 0
               OpDecorate %18 Binding 0
               OpDecorate %56 Location 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeInt 32 1
          %7 = OpTypePointer Function %6
          %9 = OpConstant %6 1
         %13 = OpTypeInt 32 0
         %14 = OpConstant %13 4
         %15 = OpTypeArray %6 %14
         %16 = OpTypeStruct %15
         %17 = OpTypePointer Uniform %16
         %18 = OpVariable %17 Uniform
         %19 = OpConstant %6 0
         %20 = OpConstant %6 3
         %21 = OpTypePointer Uniform %6
         %33 = OpTypeBool
         %47 = OpConstant %6 2
         %53 = OpTypeFloat 32
         %54 = OpTypeVector %53 4
         %55 = OpTypePointer Output %54
         %56 = OpVariable %55 Output
          %4 = OpFunction %2 None %3
          %5 = OpLabel
          %8 = OpVariable %7 Function
         %12 = OpVariable %7 Function
         %24 = OpVariable %7 Function
         %10 = OpBitReverse %6 %9
         %11 = OpExtInst %6 %1 SMin %9 %10
               OpStore %8 %11
         %22 = OpAccessChain %21 %18 %19 %20
         %23 = OpLoad %6 %22
               OpStore %12 %23
               OpStore %24 %9
               OpBranch %25
         %25 = OpLabel
               OpLoopMerge %27 %28 None
               OpBranch %29
         %29 = OpLabel
         %30 = OpLoad %6 %24
         %31 = OpLoad %6 %8
         %32 = OpISub %6 %31 %9
         %34 = OpSLessThanEqual %33 %30 %32
               OpBranchConditional %34 %26 %27
         %26 = OpLabel
         %35 = OpLoad %6 %24
         %36 = OpLoad %6 %12
         %37 = OpIAdd %6 %36 %35
               OpStore %12 %37
         %38 = OpAccessChain %21 %18 %19 %19
         %39 = OpLoad %6 %38
         %40 = OpIEqual %33 %39 %9
               OpSelectionMerge %42 None
               OpBranchConditional %40 %41 %42
         %41 = OpLabel
               OpBranch %27
         %42 = OpLabel
               OpBranch %28
         %28 = OpLabel
         %44 = OpLoad %6 %24
         %45 = OpIAdd %6 %44 %9
               OpStore %24 %45
               OpBranch %25
         %27 = OpLabel
         %46 = OpLoad %6 %12
         %48 = OpAccessChain %21 %18 %19 %47
         %49 = OpLoad %6 %48
         %50 = OpIEqual %33 %46 %49
               OpSelectionMerge %52 None
               OpBranchConditional %50 %51 %70
         %51 = OpLabel
         %57 = OpAccessChain %21 %18 %19 %19
         %58 = OpLoad %6 %57
         %59 = OpConvertSToF %53 %58
         %60 = OpAccessChain %21 %18 %19 %9
         %61 = OpLoad %6 %60
         %62 = OpConvertSToF %53 %61
         %63 = OpAccessChain %21 %18 %19 %9
         %64 = OpLoad %6 %63
         %65 = OpConvertSToF %53 %64
         %66 = OpAccessChain %21 %18 %19 %19
         %67 = OpLoad %6 %66
         %68 = OpConvertSToF %53 %67
         %69 = OpCompositeConstruct %54 %59 %62 %65 %68
               OpStore %56 %69
               OpBranch %52
         %70 = OpLabel
         %71 = OpAccessChain %21 %18 %19 %9
         %72 = OpLoad %6 %71
         %73 = OpConvertSToF %53 %72
         %74 = OpCompositeConstruct %54 %73 %73 %73 %73
               OpStore %56 %74
               OpBranch %52
         %52 = OpLabel
               OpReturn
               OpFunctionEnd
