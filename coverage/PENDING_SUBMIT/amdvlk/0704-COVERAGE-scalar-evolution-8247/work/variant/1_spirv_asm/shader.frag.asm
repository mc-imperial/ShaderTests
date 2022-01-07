; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 71
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %52
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %11 "arr"
               OpName %17 "i"
               OpName %18 "a"
               OpName %21 "buf0"
               OpMemberName %21 0 "_GLF_uniform_int_values"
               OpName %23 ""
               OpName %52 "_GLF_color"
               OpDecorate %20 ArrayStride 16
               OpMemberDecorate %21 0 Offset 0
               OpDecorate %21 Block
               OpDecorate %23 DescriptorSet 0
               OpDecorate %23 Binding 0
               OpDecorate %52 Location 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeInt 32 1
          %7 = OpTypeInt 32 0
          %8 = OpConstant %7 10
          %9 = OpTypeArray %6 %8
         %10 = OpTypePointer Function %9
         %12 = OpConstant %6 30989
         %13 = OpConstant %6 0
         %14 = OpConstant %6 1
         %15 = OpConstantComposite %9 %12 %13 %13 %13 %13 %13 %13 %13 %13 %14
         %16 = OpTypePointer Function %6
         %19 = OpConstant %7 3
         %20 = OpTypeArray %6 %19
         %21 = OpTypeStruct %20
         %22 = OpTypePointer Uniform %21
         %23 = OpVariable %22 Uniform
         %24 = OpTypePointer Uniform %6
         %33 = OpTypeBool
         %36 = OpConstant %6 9
         %43 = OpConstant %6 2
         %49 = OpTypeFloat 32
         %50 = OpTypeVector %49 4
         %51 = OpTypePointer Output %50
         %52 = OpVariable %51 Output
          %4 = OpFunction %2 None %3
          %5 = OpLabel
         %11 = OpVariable %10 Function
         %17 = OpVariable %16 Function
         %18 = OpVariable %16 Function
               OpStore %11 %15
               OpStore %17 %13
         %25 = OpAccessChain %24 %23 %13 %14
         %26 = OpLoad %6 %25
               OpStore %18 %26
               OpBranch %27
         %27 = OpLabel
               OpLoopMerge %29 %30 None
               OpBranch %31
         %31 = OpLabel
         %32 = OpLoad %6 %17
         %34 = OpINotEqual %33 %32 %14
               OpBranchConditional %34 %28 %29
         %28 = OpLabel
         %35 = OpLoad %6 %17
         %37 = OpExtInst %6 %1 SClamp %35 %13 %36
         %38 = OpAccessChain %16 %11 %37
         %39 = OpLoad %6 %38
               OpStore %17 %39
         %40 = OpLoad %6 %18
         %41 = OpIAdd %6 %40 %14
               OpStore %18 %41
               OpBranch %30
         %30 = OpLabel
               OpBranch %27
         %29 = OpLabel
         %42 = OpLoad %6 %18
         %44 = OpAccessChain %24 %23 %13 %43
         %45 = OpLoad %6 %44
         %46 = OpIEqual %33 %42 %45
               OpSelectionMerge %48 None
               OpBranchConditional %46 %47 %66
         %47 = OpLabel
         %53 = OpAccessChain %24 %23 %13 %13
         %54 = OpLoad %6 %53
         %55 = OpConvertSToF %49 %54
         %56 = OpAccessChain %24 %23 %13 %14
         %57 = OpLoad %6 %56
         %58 = OpConvertSToF %49 %57
         %59 = OpAccessChain %24 %23 %13 %14
         %60 = OpLoad %6 %59
         %61 = OpConvertSToF %49 %60
         %62 = OpAccessChain %24 %23 %13 %13
         %63 = OpLoad %6 %62
         %64 = OpConvertSToF %49 %63
         %65 = OpCompositeConstruct %50 %55 %58 %61 %64
               OpStore %52 %65
               OpBranch %48
         %66 = OpLabel
         %67 = OpAccessChain %24 %23 %13 %14
         %68 = OpLoad %6 %67
         %69 = OpConvertSToF %49 %68
         %70 = OpCompositeConstruct %50 %69 %69 %69 %69
               OpStore %52 %70
               OpBranch %48
         %48 = OpLabel
               OpReturn
               OpFunctionEnd
