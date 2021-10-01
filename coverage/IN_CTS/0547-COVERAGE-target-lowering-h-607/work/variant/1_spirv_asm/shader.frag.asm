; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 72
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %52
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %8 "i"
               OpName %12 "buf0"
               OpMemberName %12 0 "_GLF_uniform_int_values"
               OpName %14 ""
               OpName %52 "_GLF_color"
               OpDecorate %11 ArrayStride 16
               OpMemberDecorate %12 0 Offset 0
               OpDecorate %12 Block
               OpDecorate %14 DescriptorSet 0
               OpDecorate %14 Binding 0
               OpDecorate %30 RelaxedPrecision
               OpDecorate %52 Location 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeInt 32 1
          %7 = OpTypePointer Function %6
          %9 = OpTypeInt 32 0
         %10 = OpConstant %9 3
         %11 = OpTypeArray %6 %10
         %12 = OpTypeStruct %11
         %13 = OpTypePointer Uniform %12
         %14 = OpVariable %13 Uniform
         %15 = OpConstant %6 0
         %16 = OpConstant %6 1
         %17 = OpTypePointer Uniform %6
         %31 = OpTypeBool
         %49 = OpTypeFloat 32
         %50 = OpTypeVector %49 4
         %51 = OpTypePointer Output %50
         %52 = OpVariable %51 Output
         %56 = OpConstant %6 2
          %4 = OpFunction %2 None %3
          %5 = OpLabel
          %8 = OpVariable %7 Function
         %18 = OpAccessChain %17 %14 %15 %16
         %19 = OpLoad %6 %18
               OpStore %8 %19
               OpBranch %20
         %20 = OpLabel
               OpLoopMerge %22 %23 None
               OpBranch %21
         %21 = OpLabel
         %24 = OpLoad %6 %8
               OpSelectionMerge %26 None
               OpSwitch %24 %26 0 %25
         %25 = OpLabel
         %27 = OpAccessChain %17 %14 %15 %16
         %28 = OpLoad %6 %27
         %29 = OpExtInst %6 %1 FindSMsb %28
         %30 = OpBitCount %6 %29
         %32 = OpSGreaterThan %31 %30 %16
               OpSelectionMerge %34 None
               OpBranchConditional %32 %33 %34
         %33 = OpLabel
               OpBranch %23
         %34 = OpLabel
               OpBranch %26
         %26 = OpLabel
         %37 = OpLoad %6 %8
         %38 = OpIAdd %6 %37 %16
               OpStore %8 %38
               OpBranch %23
         %23 = OpLabel
         %39 = OpLoad %6 %8
         %40 = OpAccessChain %17 %14 %15 %15
         %41 = OpLoad %6 %40
         %42 = OpSLessThan %31 %39 %41
               OpBranchConditional %42 %20 %22
         %22 = OpLabel
         %43 = OpLoad %6 %8
         %44 = OpAccessChain %17 %14 %15 %15
         %45 = OpLoad %6 %44
         %46 = OpIEqual %31 %43 %45
               OpSelectionMerge %48 None
               OpBranchConditional %46 %47 %67
         %47 = OpLabel
         %53 = OpAccessChain %17 %14 %15 %16
         %54 = OpLoad %6 %53
         %55 = OpConvertSToF %49 %54
         %57 = OpAccessChain %17 %14 %15 %56
         %58 = OpLoad %6 %57
         %59 = OpConvertSToF %49 %58
         %60 = OpAccessChain %17 %14 %15 %56
         %61 = OpLoad %6 %60
         %62 = OpConvertSToF %49 %61
         %63 = OpAccessChain %17 %14 %15 %16
         %64 = OpLoad %6 %63
         %65 = OpConvertSToF %49 %64
         %66 = OpCompositeConstruct %50 %55 %59 %62 %65
               OpStore %52 %66
               OpBranch %48
         %67 = OpLabel
         %68 = OpAccessChain %17 %14 %15 %56
         %69 = OpLoad %6 %68
         %70 = OpConvertSToF %49 %69
         %71 = OpCompositeConstruct %50 %70 %70 %70 %70
               OpStore %52 %71
               OpBranch %48
         %48 = OpLabel
               OpReturn
               OpFunctionEnd
