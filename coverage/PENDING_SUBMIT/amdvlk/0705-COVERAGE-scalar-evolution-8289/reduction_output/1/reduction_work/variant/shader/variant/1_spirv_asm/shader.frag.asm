; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 55
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %50
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %8 "f"
               OpName %11 "buf_push"
               OpMemberName %11 0 "one"
               OpName %13 ""
               OpName %23 "a"
               OpName %25 "i"
               OpName %50 "_GLF_color"
               OpMemberDecorate %11 0 Offset 0
               OpDecorate %11 Block
               OpDecorate %50 Location 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeFloat 32
          %7 = OpTypePointer Function %6
          %9 = OpConstant %6 1
         %10 = OpTypeInt 32 1
         %11 = OpTypeStruct %10
         %12 = OpTypePointer PushConstant %11
         %13 = OpVariable %12 PushConstant
         %14 = OpConstant %10 0
         %15 = OpTypePointer PushConstant %10
         %18 = OpTypeBool
         %22 = OpTypePointer Function %10
         %24 = OpConstant %10 1
         %32 = OpConstant %10 120
         %48 = OpTypeVector %6 4
         %49 = OpTypePointer Output %48
         %50 = OpVariable %49 Output
         %51 = OpConstant %6 0
         %52 = OpConstantComposite %48 %9 %51 %51 %9
         %54 = OpConstantComposite %48 %51 %51 %51 %51
          %4 = OpFunction %2 None %3
          %5 = OpLabel
          %8 = OpVariable %7 Function
         %23 = OpVariable %22 Function
         %25 = OpVariable %22 Function
               OpStore %8 %9
         %16 = OpAccessChain %15 %13 %14
         %17 = OpLoad %10 %16
         %19 = OpSGreaterThan %18 %17 %14
               OpSelectionMerge %21 None
               OpBranchConditional %19 %20 %21
         %20 = OpLabel
               OpStore %23 %24
               OpStore %25 %14
               OpBranch %26
         %26 = OpLabel
               OpLoopMerge %28 %29 None
               OpBranch %30
         %30 = OpLabel
         %31 = OpLoad %10 %25
         %33 = OpSLessThan %18 %31 %32
               OpBranchConditional %33 %27 %28
         %27 = OpLabel
         %34 = OpAccessChain %15 %13 %14
         %35 = OpLoad %10 %34
         %36 = OpLoad %10 %23
         %37 = OpIMul %10 %36 %35
               OpStore %23 %37
               OpBranch %29
         %29 = OpLabel
         %38 = OpLoad %10 %25
         %39 = OpIAdd %10 %38 %24
               OpStore %25 %39
               OpBranch %26
         %28 = OpLabel
         %40 = OpLoad %10 %23
         %41 = OpConvertSToF %6 %40
               OpStore %8 %41
               OpBranch %21
         %21 = OpLabel
         %42 = OpLoad %6 %8
         %43 = OpExtInst %6 %1 FMax %42 %9
               OpStore %8 %43
         %44 = OpLoad %6 %8
         %45 = OpFOrdEqual %18 %44 %9
               OpSelectionMerge %47 None
               OpBranchConditional %45 %46 %53
         %46 = OpLabel
               OpStore %50 %52
               OpBranch %47
         %53 = OpLabel
               OpStore %50 %54
               OpBranch %47
         %47 = OpLabel
               OpReturn
               OpFunctionEnd
